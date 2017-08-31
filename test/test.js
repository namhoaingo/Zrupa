var React = require('react');
var expect = require('expect');
var enzyme = require('enzyme');
var Search = require('./../app/components/Search.jsx');

describe('Search Components', function(){
	it('Search Component Render', function(){
		expect(
			enzyme.shallow(<Search />).length
			).toEqual(1)
	})
});