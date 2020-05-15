const fs = require('fs')
module.exports = {
  devServer: {
    proxy: 'https://soul-to-soul.herokuapp.com/',
    https: {
      key: fs.readFileSync('../soul-to-soul/server.key'),
      cert: fs.readFileSync('../soul-to-soul/server.crt')
    },
    public: 'https://localhost:8080/'
  }
}
