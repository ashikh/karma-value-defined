describe('Protractor test', function (){
	
	it('third test', function(){
		browser.get('http://127.0.0.1:63837/test/bind_model.html');
		
		expect(element(by.binding('msg')).getText()).toBe('99');
	});
});