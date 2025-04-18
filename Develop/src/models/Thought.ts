import { Schema, model, type Document } from 'mongoose';

interface IReaction {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    userName: string;
    createdAt: number;
}

interface IThought extends Document {
    thoughtText: string,
    userName: string,
    createdAt: number,
    reactions: IReaction[]
}

const reactionSchema = new Schema<IReaction>({
    reactionBody: { type: String, required: true, },
    userName: { type: String, required: true, },
    createdAt: { type: Number, default: Date.now() }
});

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Number,
            default: Date.now(),
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
        timestamps: true
    },
);

const Thoughts = model<IThought>('Thought', thoughtSchema);

export default Thoughts;
