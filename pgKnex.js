
// Import the required packages
const { Model } = require('objection');
const PgKnex = require('knex');
const config = require('./knexfile');

const knex = PgKnex(config);
Model.knex(knex);
module.exports = knex;

