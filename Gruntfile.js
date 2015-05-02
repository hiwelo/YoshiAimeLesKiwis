/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            uglify: {
                combine: {
                    files: {
                        'dist/main.js': ['js/*.js']
                    },
                    options: {
                        sourceMap: true
                    }
                }
            },
            sass: {
                dev: {
                    options: {
                        style: 'expanded',
                        compass: false
                    },
                    files: {
                        'dist/main.css': ['scss/knacss.scss']
                    }
                },
                dist: {
                    options: {
                        style: 'compressed',
                        compass: false
                    },
                    files: {
                        'dist/main.css': ['scss/knacss.scss']
                    }
                }
            },
            jslint: {
                Gruntfile: {
                    src: ['Gruntfile.js']
                },
                js: {
                    src: ['js/*.js']
                }
            },
            csslint: {
                strict: {
                    options: {
                        import: 2
                    },
                    src: ['dist/*.css']
                },
                lax: {
                    options: {
                        import: false
                    },
                    src: ['dist/*.css']
                }
            },
            scsslint: {
                allFiles: [
                    'scss/*.scss'
                ]
            },
            autoprefixer: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
                },
                main: {
                    expand: true,
                    flatten: true,
                    src: 'css/*.css',
                    dest: 'dist/'
                }
            },
            watch: {
                scripts: {
                    files: ['js/*.js'],
                    tasks: ['uglify']
                },
                sass: {
                    files: 'scss/*.scss',
                    tasks: ['sass:dev', 'autoprefixer:main']
                }
            },
            notify_hooks: {
                options: {
                    enabled: true,
                    success: true, // whether successful grunt executions should be notified automatically
                    duration: 0.1 // the duration of notification in seconds, for notify-send only
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['uglify', 'sass:dist', 'autoprefixer:main']);
    grunt.registerTask('lint', ['jslint', 'scsslint']);
    grunt.registerTask('csslint', ['csslint:strict']);

    grunt.task.run('notify_hooks');
};
