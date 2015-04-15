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
	user: { 
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);