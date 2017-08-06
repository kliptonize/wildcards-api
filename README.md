# Wildcards API (Graphql)
This'd be the API for the Wildcards app & website.

## Installation
### w/ Docker
- Install Docker
- Run `docker build https://github.com/kliptonize/wildcards-api.git#master -t wildcards-api`
- Run `docker run wildcards-api` 
- Import mongofiles with `mongorestore -h address-of-mongo-container-here:27017 -db wildcards path/to/mongodump`
- ...?
- Profit

### w/ Node & Mongodb
- Kickstart Mongodb (probably with `mongodb`)
- Import mongofiles with `mongorestore -h localhost:27017 -db wildcards path/to/mongodump`
- Kickstart node with `npm index.js`
- Tada.

## Testing the api
- Kickstart this thing, and go to `graphiql`, that'll help ;)

## Questions / Bug reports
-> Github Issue tracker!