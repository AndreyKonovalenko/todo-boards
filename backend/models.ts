import mongoose, { Schema, InferSchemaType  } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
});
export type TUser = InferSchemaType<typeof userSchema>;


const saltRounds = 10;
userSchema.pre('save', async function(next) {
  const user = this;
  if( user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, saltRounds)
  }
  next();
})

export const UserModal = mongoose.model('User', userSchema);
  
const cardSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String },
  complition: { type: Boolean },
});
export type TCard = InferSchemaType<typeof cardSchema>;

export const CardModal = mongoose.model('Card', cardSchema);

const listSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  cards_id: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});

export type TList = InferSchemaType<typeof listSchema>;

export const ListModal = mongoose.model('List', listSchema);

const boardSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lists_id: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

export type TBoard = InferSchemaType<typeof boardSchema>;

export const BoardModal = mongoose.model('Board', boardSchema);
