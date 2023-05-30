const TestModel = require("../models/TestModel");

module.exports = {
    index : (req, res, next) => {
        return res.render('index', {
            title : "User Page"
        })
    },
    list : async (req, res, next) => {
        const list = await TestModel.query();
        return res.send(list);
    }
}
