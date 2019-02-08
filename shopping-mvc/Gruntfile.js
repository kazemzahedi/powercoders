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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);

};