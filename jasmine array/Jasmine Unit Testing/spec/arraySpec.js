describe('This suite is to check if a given value exist in array', function() {
	var names=['avinash', 'sunder', 'naveen','ravi','raj']
	it('This tests for values in array', function(){
		expect(names).toContain('naveen');
		expect(names).toContain('raj');
	});
	
});