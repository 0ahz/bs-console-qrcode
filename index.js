const qrcode = require('qrcode-terminal');
const PLUGIN_NAME = "Console QRCode";

module.exports.plugin = (opts, bs) => {

  const logger = bs.getLogger(PLUGIN_NAME);

  bs.events.on("service:running", (data) => {

    qrcode.generate(data.urls.external, (qr) => {
      logger.info(`Scan access external url: ${data.urls.external}`);
      console.log(qr);
    });

  });

};

module.exports.hooks = {
  "client:js": require("fs").readFileSync(__dirname + "/client.js", "utf-8")
};

module.exports["plugin:name"] = PLUGIN_NAME;