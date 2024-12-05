const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visits: [
      {
        time: {
          type: String,
        },
        ip: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const modelURL = mongoose.model('url', urlSchema);

module.exports = modelURL;
