describe('This suite is to check if X is greater than Y', function() {
	var X=100, Y=99;
	it('This tests if the value of X is greater than Y', function(){
		expect(X).toBeGreaterThan(Y);
	});
});