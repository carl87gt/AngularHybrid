//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/foo/*.js' +
            'test/**/*.js'
        ],

        autoWatch: true,

        singleRun: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};
