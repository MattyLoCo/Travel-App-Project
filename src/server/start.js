const app = require('./server.js');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  return console.log(`Express server listening on port ${port}...`);
});