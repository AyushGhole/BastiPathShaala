const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema({
  amount: {
    type: Number,
  },
  method: {
    type: String,
  },
  status: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("BastiDonation", userSchema);
