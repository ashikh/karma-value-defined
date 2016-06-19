describe('testing key value',function(){
it('must check key-value equal or not',function(){
	browser.get('http://127.0.0.1:64771/index.html');
	element(by.model('a')).sendKeys('45');
	element(by.model('b')).sendKeys('77');
	expect(element(by.binding('a')).getText()).toEqual('45');
	expect(element(by.binding('b')).getText()).toEqual('77');
});
});