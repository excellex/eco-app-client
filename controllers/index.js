  const path = require('path')
  module.exports.getRoot = async function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}


