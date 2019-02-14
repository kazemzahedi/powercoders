module.exports = function (grunt) {
  //project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("2019-02-08") %> */\n'
      },
      build: {
        src: ['src/js/*.js', '!src/js/ui.js', 'src/js/ui.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      html: {
        src: 'src/html/index.prod.html',
        dest: 'build/index.html'
      },
      static: {
        files: [{
            expand: true,
            cwd: 'src/static',
            src: '*.*',
            dest: 'build/static'
        }]
      }
    },
    cssmin: {
      target: {
        files: {
          'build/css/style.min.css': ['src/css/*.css']
        }
      }
    },
    less: {
      build: {
        files: {
          'src/css/style.css': 'src/css/style.less'
        }
      }
    },
    watch: {
      css: {
        files: 'src/css/*.css',
        tasks: ['cssmin']
      },
      scripts: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      },
      html: {
        files: 'src/html/index.prod.html',
        tasks: ['copy:html']
      },
      static: {
        files: 'src/static/*.*',
        tasks: ['copy:static']
      },
      less: {
        files: 'src/css/*.less',
        tasks: ['less']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy', 'less', 'cssmin']);

};