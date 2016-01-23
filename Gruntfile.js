/**
 * Created by tqy on 2016/1/22.
 */
/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					config: 'config.rb'
//						sassDir:'sass',
//						cssDir:'css'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: ['sass/**/*.scss'],
				tasks: ['compass']
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['compass:dist', 'watch']);
	
};