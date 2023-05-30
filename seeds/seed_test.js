/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('test').insert([
    {id: 1, name: 'test one', address : 'address one'},
    {id: 2, name: 'test two', address : 'address two'},
    {id: 3, name: 'test three', address : 'address three'}
  ]);
};
