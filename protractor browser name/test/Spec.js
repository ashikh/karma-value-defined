describe('Protractor test', function (){
	it('first test', function(){
		browser.get('http://www.google.com');
		expect(browser.getTitle()).toEqual('Google');
	});
});