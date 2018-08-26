const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    name: {type: String },
    league: {type: String },
    classId: {type: Number },
    ascendancyClass: {type: Number },
    class: {type: String },
    level: {type: Number },
    rank: {type: Number },
    dead: {type: Boolean },
    online: {type: Boolean },
    id: {type: String },
    account: {type: Object },
  
});


// Export the model
module.exports = mongoose.model('Character', CharacterSchema);