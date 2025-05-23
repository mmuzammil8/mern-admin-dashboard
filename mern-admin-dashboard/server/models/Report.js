const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  status: String,
  views: Number,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  reportType: String,
  attachment: String,
});

module.exports = mongoose.model("Report", reportSchema);
