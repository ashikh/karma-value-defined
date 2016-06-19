describe('This suite is to test for addition', function() {
	var a=45, b=54;
	it('This tests if the function performs addition operation correctly', function(){
		var sum=addition(a,b);
		expect(sum).toEqual(99);
	});
});