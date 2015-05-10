describe('angularjs homepage', function () {

    it('should say hello to HCM', function () {
		browser.get('http://www.angularjs.org');
		element(by.model('yourName')).sendKeys('HCM');
		var greeting = element(by.binding('yourName'));
		expect(greeting.getText()).toEqual('Hello HCM!');
    });
	
});