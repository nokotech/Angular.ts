// Import lib
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const Type = require('./type/index.js');
const Schema = require('./schema/index.js');

// Import data
const data = require('./data/data.json');
const schema = Schema.GetUserQuery;

// express setting
const app = express();
app.listen(3000);

// SITE routing
app.use(express.static(__dirname + '/../../spa/dest/'));

// API routing
app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));

console.log(__dirname);
console.log('GraphQL server running on http://localhost:3000/graphql');