const http = require('http')
const bodyParser = require('body-parser')
const app = require('express')()
const cors = require('cors')
const knex = require('knex')({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: "./assignment.sqlite"
  }
})

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world! Try the /app route for a list of appIDs.')
})

app.get('/app', (req, res) => {
  knex('assignment').select('appID').groupBy('appID')
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID', (req, res) => {
  knex('assignment').select().where({appID: req.params.appID})
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID/:field', (req, res) => {
  knex('assignment').select(req.params.field).where({appID: req.params.appID})
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/fields', (req, res) => {
  knex('assignment').columnInfo()
    .then(fields => res.json(Object.keys(fields)))
    .catch(err => res.status(500).send(err))
})

// get set of fields from all record and filter out empty values
app.post('/appData', (req, res) => {
  knex('assignment').select(req.body.fields)
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

// get buildName from all record and filter out empty values
app.get('/buildName', (req, res) => {
  knex('assignment').select('buildName').whereNot('buildName', "").groupBy('buildName')
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

// get buildVer from all record and filter out empty values
app.get('/buildVer', (req, res) => {
  knex('assignment').select('buildVer').whereNot('buildVer', "").groupBy('buildVer')
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

console.log('App listening on http://localhost:8081')
app.listen(8081)
