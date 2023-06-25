const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  username: {
    type: String,
    requried: true,
    unique: true,
  },
  firstName: {
    type: String,
    requried: true,
  },
  lastName: {
    type: String,
    requried: true,
  },
  address: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  zip: {
    type: Number,
    requried: true,
  },
  phoneNumber: {
    type: Number,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
});

const AdminModel = model("Admins", AdminSchema);
module.exports = AdminModel;
