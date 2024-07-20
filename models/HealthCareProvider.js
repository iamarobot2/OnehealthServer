const mongoose = require("mongoose");
const { format } = require("date-fns/format");

const healthCareProviderSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
      min: "1900-01-01",
      max: format(new Date(), "yyyy-MM-dd"),
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactnumber: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    medicalLicenseNumber: {
      type: String,
    },
    workaddress: {
      address: String,
      state: String,
      district: String,
      postalCode: String,
    },
    role: {
      type: String,
      default: "healthcareprovider",
    },
    otp: { type: String },
    otpHash: { type: String },
    otpExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Hcp = mongoose.model(
  "HealthCareProvider",
  healthCareProviderSchema
);
module.exports = Hcp;
