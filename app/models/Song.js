// grab the mongoose module
var mongoose = require('mongoose');

// define song model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Song', {
	name : {type : String},
	genre : {type : String},
	songLevel : {type : String},
	description : {type : String},
	price : {type : String},
    added : {type : Date},
    sampleAudio : {type: String}
}, 'Songs');
