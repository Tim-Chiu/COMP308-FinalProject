'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Survey name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	};
    q1: String, 
    a11: String, 
    a12: String, 
    a13: String, 
    a14: String,
    q2: String,       
    a21: String, 
    a22: String, 
    a23: String, 
    a24: String,
    q3: String,       
    a31: String, 
    a32: String, 
    a33: String, 
    a34: String,
    q4: String,      
    a41: String, 
    a42: String, 
    a43: String, 
    a44: String,
    q5: String,      
    a51: String, 
    a52: String, 
    a53: String, 
    a54: String, 
    q6: String,      
    a61: String, 
    a62: String, 
    a63: String, 
    a64: String,
    q7: String,      
    a71: String, 
    a72: String, 
    a73: String, 
    a74: String,
    q8: String,      
    a81: String, 
    a82: String, 
    a83: String, 
    a84: String,
    q9: String,      
    a91: String, 
    a92: String, 
    a93: String, 
    a94: String,
    q10: String,      
    a101: String, 
    a102: String, 
    a103: String, 
    a104: String,
	user: { 
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);