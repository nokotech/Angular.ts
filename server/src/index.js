// Import lib
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const Type = require('./type/index.js');
const Schema = require('./schema/index.js');

// Import data
const db = new sqlite3.Database('db.sqlite3');
// db.run("DROP TABLE IF EXISTS schedule");
// db.run("CREATE TABLE if not exists schedule (name TEXT, startTime TEXT, endTime TEXT, summary TEXT)");
// db.run("INSERT into schedule(name, startTime, endTime, summary) VALUES ('name1','startTime1','endTime1','summary1')");
// db.run("INSERT into schedule(name, startTime, endTime, summary) VALUES ('name2','startTime2','endTime2','summary2')");
// db.run("INSERT into schedule(name, startTime, endTime, summary) VALUES ('name3','startTime3','endTime3','summary3')");
db.all("SELECT * from schedule", (err,rows) => {
    // console.log(rows);
});

// const data = require('./data/data.json');
const schema = Schema.GetScheduleSchema;

// express setting
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000);
console.log(__dirname);
console.log('GraphQL server running on http://localhost:3000/graphql');

// SITE routing
app.use(express.static(__dirname + '/../../spa/dest/'));

// API routing
app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));

// GET DATA
app.get('/GetScheduleQuery', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    graphql.graphql(schema, `{ GetScheduleQuery {name, startTime, endTime, summary} }`, {db}).then((result) => {
        res.send(result);
    });
})

// REGIST DATA
app.post('/RegistScheduleQuery', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    console.log(req.body);
    const name = "";
    const startTime = "";
    const endTime = "";
    const summary = "";
    db.run(`INSERT into schedule(name, startTime, endTime, summary) VALUES (${name}, ${startTime}, ${endTime}, ${summary})`);
    graphql.graphql(schema, `{ GetScheduleQuery {name, startTime, endTime, summary} }`, {db}).then((result) => {
        res.send(result);
    });
})