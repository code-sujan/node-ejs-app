// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
/*module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'workshop_db',
      user:     'postgres',
      password: 'data-safety'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};*/

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'workshop_db',
    user:     'postgres',
    password: 'data-safety'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}