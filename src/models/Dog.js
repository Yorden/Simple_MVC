var mongoose = require('mongoose');

var DogModel;

var DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    breed: {
        type: String,
        trim:true,
        required: true
    },
    age:{
        type:Number,
        trim:true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

});

DogSchema.statics.findByName = function(name, callback) {

    var search = {
        name: name
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
