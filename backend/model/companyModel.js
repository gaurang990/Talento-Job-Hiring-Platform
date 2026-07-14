const { model, Schema } = require('../connection');

const companySchema = new Schema({
  compName: {
    type: String,
    required: true
  },
  compEmail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  about: {
    type: String,
    default: ""
  },
  firstName: String,
  lastName: String,
  country: String,
  streetAddress: String,
  city: String,
  region: String,
  postalCode: String,
  logo: {
    type: String,
    default: "logo_placeholder.png"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("companyData", companySchema);