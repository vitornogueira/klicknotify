module.exports = (config) => {
  config.set({
    plugins: [
      'karma-mocha',
      'karma-browserify',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-es6-shim',
    ],

    frameworks: [
      'browserify',
      'mocha',
      'es6-shim',
    ],

    files: ['src/js/**/*.js', 'test/**/*.js'],

    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'test/**/*.spec.js': ['browserify'],
    },

    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['es2015'] }],
      ],
    },

    browsers: ['PhantomJS'],

    reporters: ['mocha'],

    singleRun: true,
    autoWatch: false,
  });
};
