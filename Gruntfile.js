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

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.{scss}','sass/_partials/**/*.{scss}'],
                tasks: ['compass:dist']
            }
        },
        sass: {
            dist: {
                files: {
                    'stylesheets/styles.css': 'sass/styles.scss'
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        }

    });
    grunt.registerTask('default', ['compass:dist', 'watch']);
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
