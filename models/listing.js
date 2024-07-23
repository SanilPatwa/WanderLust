const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-model-of-a-house-with-a-car-parked-in-front-of-it-TD5d-_Mw3xY",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-model-of-a-house-with-a-car-parked-in-front-of-it-TD5d-_Mw3xY"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
