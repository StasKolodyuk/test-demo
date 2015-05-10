module.exports = function( grunt ){


   grunt.loadNpmTasks('grunt-shell-spawn');
   grunt.loadNpmTasks('grunt-protractor-runner');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-protractor-webdriver');
   
	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
			  
		protractor: {
			options: {
				nodeBin: "node/node.exe",
				configFile: "protractor.conf.js"
			},
			test: {
				keepAlive: false,
			}
		},
		
		protractor_webdriver: {
			start: {
				options: {
					keepAlive: true,
					command: 'node\\node ./node_modules/protractor/bin/webdriver-manager start',
				},
			},
		},
		
		shell: {
			options: {
				stdout: true
			},
			update_driver: {
				command: 'node\\node ./node_modules/protractor/bin/webdriver-manager update --ie'
			}
		}
	});
	
	grunt.registerTask('default',['shell:update_driver', 'protractor_webdriver:start', 'protractor:test']);

};