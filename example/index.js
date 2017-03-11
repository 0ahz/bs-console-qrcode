const browserSync = require('browser-sync').create();

browserSync.init({
    server: 'app',
    plugins: [require('../')]
});