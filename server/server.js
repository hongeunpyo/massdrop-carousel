const app = require('./app.js')
var port = process.env.PORT || 3007

app.listen(port, () => console.log(`server is listening on port ${port}`))

module.exports = app;