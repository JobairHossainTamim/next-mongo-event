import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: { type: String, required: true },
    date: { type: String, required: true },
    guest: {
      type: Array,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    ticketTypes: {
      type: Array,
      required: true,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models && mongoose.models.events) {
  delete mongoose.models.events;
}

const EventModel = mongoose.model("events", eventSchema);

export default EventModel;
