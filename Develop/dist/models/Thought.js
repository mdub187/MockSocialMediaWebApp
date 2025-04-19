import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reactions: [
      {
        reactionBody: { type: String },
        username: { type: String },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


const Thought = model('Thought', thoughtSchema);
export default Thought;