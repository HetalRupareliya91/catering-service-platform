const { createApp } = require('./app');
const config = require('./config');

createApp().listen(config.port, () => {
  console.log('Royal Feast Catering running on http://localhost:' + config.port);
  console.log('Admin panel: http://localhost:' + config.port + '/admin');
});
