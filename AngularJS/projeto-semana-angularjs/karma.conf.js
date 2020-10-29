module.exports = configKarma;

function configKarma(config) {
    config.set({
        hostname: 'localhost',

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-phantomjs-launcher'),
        ],

        // list of files / patterns to load in the browser
        files: [
            // Para permitir a execução dos testes em ambiente de integração contínua, é necessário incluir os as bibliotecas JavaScript
            // necessárias para a execução da aplicação neste ponto
            { pattern: 'node_modules/angular/angular.js', watched: false },
            { pattern: 'node_modules/angular-route/angular-route.js', watched: false },
            { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },
            // { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', watched: false },
            'spec/**/*_init-spec.js',
            'spec/**/*_spec.js',

            'app/**/*.module.js',
            'app/**/*.routes.js',
            'app/**/constantes.js', // pq tá sem tipo
            'app/**/filtros.js', // pq tá sem tipo
            'app/**/*.service.js',
            'app/**/*.constant.js',
            'app/**/*.filter.js',
            'app/**/*.factory.js',
            'app/**/*.component.js',
            'app/**/*.directive.js',
            'app/**/*.controller.js',
        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.module.js': ['coverage'],
            'app/**/*.routes.js': ['coverage'],
            'app/**/*.service.js': ['coverage'],
            'app/**/*.constant.js': ['coverage'],
            'app/**/*.factory.js': ['coverage'],
            'app/**/constantes.js': ['coverage'],
            'app/**/filtros.js': ['coverage'],
            'app/**/*.filter.js': ['coverage'],
            'app/**/*.component.js': ['coverage'],
            'app/**/*.directive.js': ['coverage'],
            'app/**/*.controller.js': ['coverage'],
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/javascript',
            reporters: [
                {
                    type: 'lcov',
                    subdir: 'lcov'
                },
                { type: 'text-summary' },
            ]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        //autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Chrome'],
        // browsers: ['PhantomJS', 'Chrome'],
        browsers: ['PhantomJS'],

        // customLaunchers: {
        //     Chrome_with_debugging: {
        //         base: 'Chrome',
        //         flags: ['--remote-debugging-port=9222'],
        //         debug: true
        //     }
        // },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        //concurrency: Infinity
    });
}