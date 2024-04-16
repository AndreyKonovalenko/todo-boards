import mongoose, { Schema, Types } from 'mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';

// user
export interface IUser extends mongoose.Document {
	username: string,
	password: string;
}
type TUserModal = Model<IUser>;
const userSchema = new Schema<IUser, TUserModal>({
	username: { type: String, required: true, unique: true},
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

// card
export interface ICard extends mongoose.Document {
  title: string;
  description: string;
  complition: boolean;
}
type TCardModal = Model<ICard>
const cardSchema = new Schema<ICard, TCardModal>({
	title: { type: String, required: true },
	description: { type: String },
	complition: { type: Boolean },
});
export const CardModal = mongoose.model<ICard, TCardModal>('Card', cardSchema);

// list
export interface IList extends mongoose.Document {
  title: string;
  creater_id: Types.ObjectId;
  cards?: Array<Types.ObjectId>;
}
type TListModel = Model<IList>
const listSchema = new Schema<IList, TListModel>({
	title: { type: String, required: true },
  creater_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	cards: Array<{ type: Schema.Types.ObjectId, ref: 'Card' }>,
});
export const ListModal = mongoose.model<IList, TListModel>('List', listSchema);

// board
export type TBoard = {
  title: string;
  creater_id: Types.ObjectId;
  lists?: Array<Types.ObjectId>
}
// need to rewrite TBoard to Board Document
export type TBoardDocument = TBoard & mongoose.Document;
type TBoardModel = Model<TBoard & mongoose.Document>  

const boardSchema = new Schema<TBoardDocument, TBoardModel>({
	title: { type: String, required: true },
	creater_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	lists: Array<{ type: Schema.Types.ObjectId, ref: 'List' }>,
});

export const BoardModal = mongoose.model<TBoard & mongoose.Document, TBoardModel>('Board', boardSchema);
