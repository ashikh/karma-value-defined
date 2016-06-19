describe('This suite is to test for less-than, greater-than values', function() {
	var a=9, b=10, c=21, d=23;
	it('This tests if value is less than given value', function(){
		expect(a).toBeLessThan(b);
	});
	it('This tests if value is greater than given value', function(){
		expect(d).toBeGreaterThan(c);
	});
	
});