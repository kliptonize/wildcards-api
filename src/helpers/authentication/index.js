//Dependencies
const express = require('express');
var router = express.Router();
var fs = require('fs');
var jwt = require('jsonwebtoken');
const {ObjectId} = require('mongodb');

//Header regex
const HEADER_REGEX = /bearer (.*)$/;

//Read keys
var public_key = fs.readFileSync('src/config/keys/public.key');
var private_key = fs.readFileSync('src/config/keys/private.key');

//Import Mongo Connector
const connectMongo = require('./../mongo-connector');

router.post('/identify', async function(req, res){
	//Check if device_id is set
	if(!req.body.device_id){
		res.status(400);
		res.send({message: "Bad request, device_id not provided"});
		return;
	}

	//Request body contains device_id, so this'll be the account
	const mongo = await connectMongo();
	var device = await mongo.Devices.findOne({device_id: req.body.device_id});

	if(device == null){
		//New device, register it
		device = await mongo.Devices.insert({
			"device_id": req.body.device_id,
		});
		if(!device.result.ok){
			res.status(500);
			res.send({message: "MongoDB got an error"});
			return;
		}else{
			//Function can't access 'device', find a way around!
			device = {
				id: device.insertedIds[0]
			};
		}
	}else{
		device.id = device._id;
	}

	//Respond with token
	var expires = Math.floor(Date.now() / 1000) + (60*60);
	var token = jwt.sign({
		exp: expires,
		data: { 
			_id: device.id
		}
	}, private_key, { algorithm: 'RS256'});
	res.send({
		access_token: token, 
		token_type: "bearer", 
		expires: Math.floor(Date.now() / 1000) + (60*60)
	});
});

async function authenticate({headers: {authorization}}, res, Devices){
	//Do some magic here
	//Decode ID with jwt.token(), then verify with jwt.verify()
	var token;
	if(authorization && (token = HEADER_REGEX.exec(authorization))){
		try{
			jwt.verify(
				token[1],
				public_key,
				{ algorithm: 'RS256'}
			);
			//Decode it, and check for device
			var decoded_token = jwt.decode(token[1]);
			var device = await Devices.findOne({_id: new ObjectId(decoded_token.data._id)});

			if(device == null){
				res.status(404);
				res.send({message: "Unknown device id, register it with /authenticate/identify"});
				return;
			}else{
				return device;
			}
		} catch(err){
			switch(err.name){
				case 'JsonWebTokenError':
				default:
					res.status(401);
					res.send({message:"Invalid token"});
					return;
					break;
				case 'TokenExpiredError':
					res.status(401);
					res.send({message:"Token has expired"});
					return;
					break;
			}
		}
	}else{
		res.status(401);
		res.send({message: "No token supplied"});
		return;
	}
}

module.exports = {
	authenticationRouter: router,
	authenticate
};