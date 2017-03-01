let mongoose = require('mongoose');
// import mongoose from "mongoose";
let Schema = mongoose.Schema;


let ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  date: {
  	type: Date,
  	default: Date.now,
  	required: "Date is Required"
  },
  url: {
  	type: String,
  	required: true,
  	required: "URL is Required",
  	unique: true
  }
});

// Create the Model
let Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;