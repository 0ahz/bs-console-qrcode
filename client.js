(function(bs) {
  var socket = bs.socket;
  socket.on('connection', function(options) {
    window.externalUrl = options.urls.external;
    logText('Scan access external url ' + options.urls.external);
    logQrcode(options.urls.external);
  });

  window.showQrcode = function(text) {
    var _text = text || window.location.href;
    if (window.externalUrl) {
      _text = _text.replace(window.location.origin, window.externalUrl);
    }
    logText(_text);
    logQrcode(_text);
    return 'done';
  };

  function logText(text) {
    console.log(text);
  }

  function logQrcode(text) {
    console.log('%c ', "padding:100px;background:url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=" + text + "') no-repeat;");
  }
})(window.___browserSync___);
