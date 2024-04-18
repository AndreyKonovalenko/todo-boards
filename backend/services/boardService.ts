import { BoardModal, TBoard, TBoardDocument } from "../models";
import { Types } from "mongoose";

export async function createBoard(board:TBoard): Promise<null | TBoardDocument>  {
  const newBoard: TBoardDocument = await BoardModal.create(board)
  console.log(newBoard)
  return newBoard ? newBoard: null
}

export async function findBoardsByCreaterId(id:Types.ObjectId): Promise<null | Array<TBoardDocument>> {
  const boards: Array<TBoardDocument> = await BoardModal.find({_id:id})
  console.log(boards)
  return boards? boards: null
}
