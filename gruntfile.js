module.exports = function(grunt) {

	// config -----------------------------------------------------------------

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		// concat -------------------------------------------------------------

		concat: {
			dist: {
				src: [
					"src/combo.prefix.js",
					"src/modules/core.js",				
					"src/combo.suffix.js"
				],
				dest: "dist/combo.full.js"
			}
		},

		// replace -------------------------------------------------------------

		replace: {
   			dist: {
				src: ['dist/combo.full.js'],
				dest: ['dist/combo.full.js'],
				replacements: [
					{ from: "@version", to: "<%= pkg.version %>" }
				]
			}
		},

		// jshint -------------------------------------------------------------

		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			files: [
				"dist/combo.full.js"
			]
		},

		// docco --------------------------------------------------------------

		docco: {
			dist: {
				src: ["dist/combo.full.js"],
				options: {
					output: "doc/docco"
				}
			}
		},

		// babel --------------------------------------------------------------

		babel: {
			dist: {
				files: {
					"dist/combo.full.js": "dist/combo.full.js"
				}
			}
		},

		// uglify -------------------------------------------------------------

		uglify: {
			dist: {
				src: 'dist/combo.full.js',
				dest: 'dist/combo.min.js'
			}
		} 	
	});

	// load -------------------------------------------------------------------


	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-docco");
	grunt.loadNpmTasks('grunt-text-replace');

	// register ---------------------------------------------------------------

	grunt.registerTask("default", [
		"concat",
		"replace",
		"jshint",
		"docco",
		"babel",
		"uglify"
	]);
}
