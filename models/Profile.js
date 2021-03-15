const mongoose = require('mongoose');

const profile = new mongoose.Schema({

    firstName:{
       type:  String,
       required: true
    },
    lastName :{
      type: String,
      required: true
    }
})

module.exports = Profile = mongoose.model('Profile', profile);