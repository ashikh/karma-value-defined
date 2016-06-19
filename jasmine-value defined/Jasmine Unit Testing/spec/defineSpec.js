describe('This suite is to test for defined and null values', function() {
	var a, b=1, c=null, d=2;
	it('This tests for defined', function(){
		expect(a).toBeUndefined();
		expect(b).toBeDefined();
	});
	it('This tests for null condition', function(){
		expect(c).toBeNull();
		expect(d).not.toBeNull();
	});
	
});