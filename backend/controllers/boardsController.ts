import { Request, Response } from 'express';
import { TBoard } from '../models';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { getErrorMessage } from '../utils';
import { CustomRequest } from '../middleware/protected';
import {
	createBoard,
	findBoardsByCreaterId,
	findBoardByBoradId,
} from '../services/boardService';

// GET: borads/
export const getBoards = async (req: Request, res: Response) => {
	const { user } = req as CustomRequest;
	console.log({ _id: user?._id });
	try {
		const boards = await findBoardsByCreaterId(user?._id);
		return res.status(StatusCodes.OK).json(boards);
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send(getErrorMessage(error));
	}
};

// POST: boards/
export const addBoard = async (req: Request, res: Response) => {
	const { user } = req as CustomRequest;
	const board: TBoard = {
		title: req.body.title,
		creater_id: user?._id,
	};
	try {
		const newBoard = await createBoard(board);
		return res.status(StatusCodes.OK).json(newBoard);
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send(getErrorMessage(error));
	}
};

// DELETE: boards/:id
type TResult = {
	acknowledged: boolean;
	deletedCount: number;
};
export const deleteBoard = async (req: Request, res: Response) => {
	const board = await findBoardByBoradId(req.params.id);
	if (!board) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.send(getErrorMessage(`Board by id: ${req.params.id} not found`));
	}
	if (board) {
		try {
			board
				.deleteOne()
				.then((result: TResult) => {
					console.log(result);
					if (result.deletedCount > 1) {
						console.log(result.deletedCount > 1);
						return res
							.status(StatusCodes.OK)
							.json(`id: ${req.params.id} deleted`);
					} else {
						return res
							.status(StatusCodes.OK)
							.json(` bourd id: ${req.params.id} not found `);
					}
				})
				.catch((error: unknown) => {
					return res
						.status(StatusCodes.INTERNAL_SERVER_ERROR)
						.send(getErrorMessage(error));
				});
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.send(getErrorMessage(error));
		}
	}
};

// const deleteQuiz = asyncHandler(async (req, res) => {
//   const quiz = await Quiz.findOne({ _id: req.params.id });
//   if (!quiz) {
//     res.status(400);
//     throw new Error("Quiz not found");
//   }
//   if (quiz) {
//     if (quiz.questions.length === 0) {
//       await quiz.remove();
//       res.status(200).json({ id: req.params.id });
//     }
//     if (quiz.questions.length > 0) {
//       for (const element of quiz.questions) {
//         const question = await Question.findOne({ _id: element });
//         // if (!question) {
//         //   res.status(400);
//         //   throw new Error('Question not found');
//         // }
//         if (question) {
//           await question.remove();
//         }
//       }
//       await quiz.remove();
//       res.status(200).json({ id: req.params.id });
//     }
//   }
// });
