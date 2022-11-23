const Model = require('./model');
module.exports =
    class Score extends Model {
        constructor(alias, score) {
            super();
            this.Alias = alias !== undefined ? alias : "";
            this.Score = score !== undefined ? score : "";

            this.addValidator('Alias', 'string');
            this.addValidator('Score', 'integer');
        }
    }