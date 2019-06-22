const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jipc', { useNewUrlParser: true });

var JIPCSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is required."]
  }

}
  , { timestamps: true }

);



module.exports = mongoose.model('JIPC', JIPCSchema);