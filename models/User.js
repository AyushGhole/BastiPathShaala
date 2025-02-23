const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  BastiDonation: [
    {
      type: Schema.Types.ObjectId,
      ref: "BastiDonation",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("BastiUser", userSchema);
