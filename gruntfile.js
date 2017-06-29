module.exports = function(grunt) {

	// config -----------------------------------------------------------------

	grunt.initConfig({

		// task 1 -------------------------------------------------------------

		concat: {
			dist: {
				src: [
					"src/combo.prefix.js",
					"src/modules/core.js",						
					"src/modules/component.js",				
					"src/combo.suffix.js"					
				],
				dest: "dist/combo-modern.full.js"
			},
		},
		
		// jshint -------------------------------------------------------------

		jshint: {
			options: {
				jshintrc: ".jshintrc",
			},
			files: [
				"dist/combo-modern.full.js"
			]
		},

		// docco --------------------------------------------------------------

		docco: {
			dist: {
				src: ["dist/combo-modern.full.js"],
				options: {
					output: "doc/docco"
				}
			}
		},

		// babel --------------------------------------------------------------

		babel: {	
			dist: {
				files: {
					"dist/combo-legacy.full.js": "dist/combo-modern.full.js"
				}
			}
		},

		// uglify -----------------------------------------------------------

		//
		// contrib-uglify does not support ES2015.
		//

		uglify: {
			legacy: {
				src: 'dist/combo-legacy.full.js',
				dest: 'dist/combo-legacy.min.js'
			},
		}
	});

	// load -------------------------------------------------------------------


	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");	
	grunt.loadNpmTasks("grunt-contrib-uglify");	
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-docco");		

	// register ---------------------------------------------------------------

	grunt.registerTask("default", [
		"concat", 
		"jshint",
		"docco",
		"babel",
		"uglify",
	]);
}
