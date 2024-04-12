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
  cards?: [Types.ObjectId];
}
type TListModel = Model<IList>
const listSchema = new Schema<IList, TListModel>({
	title: { type: String, required: true },
	cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});
export const ListModal = mongoose.model<IList, TListModel>('List', listSchema);

// board
export interface IBoard extends mongoose.Document {
  title: string;
  user_id: Types.ObjectId;
  lists?: [Types.ObjectId]
}

type TBoardModel = Model<IBoard>  

const boardSchema = new Schema<IBoard, TBoardModel>({
	title: { type: String, required: true },
	user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

export const BoardModal = mongoose.model<IBoard, TBoardModel>('Board', boardSchema);
