const Repository = require('../models/repository');
const ScoreModel = require('../models/score');

module.exports =
    class ScoresController extends require('./Controller') {
        constructor(HttpContext) {

            super(HttpContext, new Repository(new ScoreModel()), false, false);

        }
    }