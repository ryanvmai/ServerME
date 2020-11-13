const ServerME = require('./lib/serverME');

const app = new ServerME();
app.start(3000);
app.connectDatabase();