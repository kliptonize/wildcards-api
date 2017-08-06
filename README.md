# Wildcards API (Graphql)
This'd be the API for the Wildcards app & website.

## Installation
### w/ Docker
- Install & Open Docker
- Run `docker build https://github.com/kliptonize/wildcards-api.git#master -t wildcards-api`
- Run `docker-compose build && docker-compose up wildcards-api` 
- Import mongofiles with `mongorestore --host=address-of-mongo-container-here:27017 --db=wildcards --dir=path/to/mongodump`
- ...?
- Profit

### w/ Node & Mongodb
- Kickstart Mongodb (probably with `mongodb`)
- Import mongofiles with `mongorestore --host=localhost:27017 --db=wildcards --dir=path/to/mongodump`
- Kickstart node with `npm index.js`
- Tada.

## Testing the api
- Kickstart this thing, and go to `graphiql`, that'll help ;)

## Questions / Bug reports
-> Github Issue tracker!