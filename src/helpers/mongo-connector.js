const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/wildcards';

module.exports = async () => {
	const db = await MongoClient.connect(MONGO_URL);
	return {
		Sets: db.collection('collections_Sets5974b6e097ea2'), 
		Cards: db.collection('collections_Cards5974b5a160809'),
		Sources: db.collection('collections_Sources5974b82c30ead'),
		Topics: db.collection('collections_Topics597a53c4e3e5f'),
		Accounts: db.collection('cockpit_accounts')
	}
}