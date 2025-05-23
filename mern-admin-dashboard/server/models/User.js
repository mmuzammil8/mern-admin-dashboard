const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  status: { type: String, default: "active" },
  phone: String,
  address: String,
  profileImage: String,
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date,
  notes: String,
});

module.exports = mongoose.model("User", userSchema);
