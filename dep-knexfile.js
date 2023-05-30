
// Import the required packages
const { Model } = require('objection');
const Knex = require('knex');
const dotenv = require('dotenv');

// Load the environment variables from .env file
dotenv.config();
const pgKnex = Knex({
    client: 'postgres',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    migrations: {
        directory: "./migrations",
    },
    debug : true
  });
  Model.knex(pgKnex);
  module.exports = pgKnex;

