'use strict';
var assert = require('assert');
var splitText = require('./');

it('should split text into an array with chunks of max length of 15', function () {
	assert.deepEqual(splitText('unicorns are awesome', 15), ['unicorns are', 'awesome']);
});
