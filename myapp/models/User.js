import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    creator: {
      type: String,
  },
    password: {
        type: String,
        required: true,
    },
    donut: [
        {
          donut: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Donut'
          },
          isSaved: {
            type: Boolean,
            default: false  
          }
        }
      ],
      friends: {
        type: Array,
        default: [],
      },

}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)