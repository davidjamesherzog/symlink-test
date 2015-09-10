module.exports = function() {
    
    var config = {
        cowbell: 'http://www.hulu.com/watch/536145',
        sass: {
            name: 'main.min.css',
            main: './src/resources/sass/main.scss',
            src: [
                './src/resources/sass'
            ],
            dest: './src/resources/styles/'
        },
        symlinks: {
            src: [
                '../../dramafever/static_files/', 
                '../../dramafever/templates/'
            ],
            dest: [
                './src/resources',
                './src/html'
            ]
        }
               
    };

    return config;
};