const {Model} = require("objection");
const pgKnex = require("../../pgKnex");


class TestModel extends Model{
    static get tableName() {
        return 'test';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 100 },
                address: { type: 'string', minLength: 1, maxLength: 100 },
            }
        };
    }
}
TestModel.knex(pgKnex);
module.exports = TestModel;