exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome' //for ie - 'internet explorer'
    },

    specs: ['spec.js'],

    jasmineNodeOpts: {
        showColors: true,
		defaultTimeoutInterval:60000
    }
};