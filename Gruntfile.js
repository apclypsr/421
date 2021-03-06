module.exports = function (grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


  grunt.initConfig({
    subgrunt: {
      projects: {
        vanilla: 'build',
        react: 'build',
      },
    },

    copy: {
      index: {
        files: {
          'dist/index.html': 'index.html',
        },
      },

      vanilla: {
        expand: true,
        cwd: 'vanilla/dist',
        src: ['**/*.*'],
        dest: 'dist/vanilla',
      },

      react: {
        expand: true,
        cwd: 'react/dist',
        src: ['**/*.*'],
        dest: 'dist/react',
      },
    },

    'gh-pages': {
      options: {
        base: 'dist',
      },
      src: ['**'],
    },
  });

  grunt.registerTask('default', ['subgrunt', 'copy']);
  grunt.registerTask('deploy', ['default', 'gh-pages']);
};
