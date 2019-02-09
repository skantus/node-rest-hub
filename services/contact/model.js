const mongoose = require("mongoose");

// Setup schema
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Export Contact model
const Contact = (module.exports = mongoose.model("contact", contactSchema));

module.exports.get = (callback, limit) => Contact.find(callback).limit(limit);
