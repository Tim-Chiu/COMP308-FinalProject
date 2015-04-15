'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Response Schema
 */
var ResponseSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Response name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	};
	user: { 
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Response', ResponseSchema);