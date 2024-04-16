
import { BoardModal, TBoard, TBoardDocument } from "../models";




export async function createBoard(board:TBoard): Promise<null | TBoardDocument>  {
  const newBoard: TBoardDocument= await BoardModal.create(board)
  return newBoard ? newBoard: null
}