const JIPC = require('./models');

module.exports = {

  getAll: (req, res) => {
    JIPC.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  apiSubmit: (req, res) => {
    const apiDecode = req.body;
    JIPC.create(apiDecode)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
}