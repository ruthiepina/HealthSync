const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const apptSchema = new Schema(
   {
      apptDate: {
         type: Date,
      },
      apptTime: {
         type: String,
         required: true,
      },
      apptWith: {
         type: String,
      },
      username: {
         type: String,
      },
      confirmed: {
         type: Boolean,
         required: true,
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

const Appointment = model("Appointment", apptSchema);

module.exports = Appointment;
