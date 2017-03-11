; (function (bs) {

  var socket = bs.socket;

  socket.on('connection', function (options) {
    
    console.log('Scan access external url '+options.urls.external);
    console.log("%c", "padding:100px;line-height:200px;background:url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data="+options.urls.external+"') no-repeat;");

  });


})(window.___browserSync___);