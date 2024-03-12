import mongoose, { Schema, InferSchemaType } from 'mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
}
type TUserModal = Model<IUser>;

const userSchema = new Schema<IUser, TUserModal>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const saltRounds = 10;

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});
export const UserModal: TUserModal = mongoose.model<IUser, TUserModal>(
  'User',
  userSchema
);

const cardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  complition: { type: Boolean },
});
export const CardModal = mongoose.model('Card', cardSchema);

const listSchema = new Schema({
  title: { type: String, required: true },
  cards_id: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});
export const ListModal = mongoose.model('List', listSchema);

const boardSchema = new Schema({
  title: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lists_id: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});
export const BoardModal = mongoose.model('Board', boardSchema);

export type TCard = InferSchemaType<typeof cardSchema>;
export type TList = InferSchemaType<typeof listSchema>;
export type TBoard = InferSchemaType<typeof boardSchema>;
