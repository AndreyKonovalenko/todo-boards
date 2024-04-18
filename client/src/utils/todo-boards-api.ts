import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { TUser } from '../services/user/user-store';
import { TBoard } from '../services/boards/board-store';
import { TForm } from './types';

const LOGIN = '/auth/login';
const LOGOUT = '/auth/logout';
const BOARDS = '/boards';

axios.defaults.baseURL = 'api/';

axios.interceptors.response.use(
	(res) => {
    console.log(res.data)
    return res
  },
	(error: AxiosError) => {
		const { data } = error.response!;
    toast.error(data as String)
		return Promise.reject(error);
	}
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body?: {}) =>
		axios.post<T>(url, body).then(responseBody)
};

const auth = {
	login: (data: TForm) => request.post<TUser>(LOGIN, data),
	logout: () => request.post<void>(LOGOUT),
};

const boards = {
	fetchBoards: () => request.get<Array<TBoard>>('/boards'),
  createBoard:(data:TBoard) => request.post<TBoard>(BOARDS, data)
};

const api = {
	auth,
	boards,
};

export default api;
