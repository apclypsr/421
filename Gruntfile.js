module.exports = function (grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    subgrunt: {
      projects: {
        vanilla: 'build',
      },
    },

    copy: {
      index: {
        'dist/index.html': 'index.html',
      },
      vanilla: {
        expand: true,
        cwd: 'vanilla/dist',
        src: ['**/*.*'],
        dest: 'dist/vanilla',
      }
    },

    'gh-pages': {
      options: {
        base: 'dist',
      },
      src: ['**'],
    },
  });

  grunt.registerTask('default', ['subgrunt', 'copy', 'gh-pages']);
};
