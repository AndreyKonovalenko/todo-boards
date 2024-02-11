import mongoose, { Schema, InferSchemaType } from 'mongoose';

const userSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});
type TUser = InferSchemaType<typeof userSchema>;
export const UserModal = mongoose.model('User', userSchema);

const cardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  complition: { type: Boolean },
});
type TCard = InferSchemaType<typeof cardSchema>;
export const CardModal = mongoose.model('Card', cardSchema);

const listSchema = new Schema({
  title: { type: String, required: true },
  cards_id: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});
type TList = InferSchemaType<typeof listSchema>;
export const ListModal = mongoose.model('List', listSchema);

const boardSchema = new Schema({
  title: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lists_id: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

type TBoard = InferSchemaType<typeof boardSchema>;
export const BoardModal = mongoose.model('Board', boardSchema);
