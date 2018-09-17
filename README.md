# bs-console-qrcode

A [BrowserSync](http://www.browsersync.io/) plugin displays the access URL in the console ( terminal and browser ) via QR code

## Install

```shell
npm i browser-sync bs-console-qrcode
```

## Example

```shell
cd ./example
node index.js
```

```js
// ./example/index.js
const browserSync = require('browser-sync').create();

browserSync.init({
    server: 'app',
    // plugins: [require('../')],
    plugins: ['bs-console-qrcode']
});
```

## License

MIT License
