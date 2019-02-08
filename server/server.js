const app = require('./app.js')

app.listen(3001, () => console.log('server is listening on port 3001'))

module.exports = app;