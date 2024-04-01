import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { TUser } from '../services/user/user-store';
import { ReasonPhrases } from 'http-status-codes';

export type TForm = {
	[key: string]: string;
};

type TErrorsStatus = {
  [key: number]: string
}

const errors: TErrorsStatus = {
  400: ReasonPhrases.BAD_REQUEST,
  401: ReasonPhrases.UNAUTHORIZED,
  404: ReasonPhrases.NOT_FOUND,
  500: ReasonPhrases.INTERNAL_SERVER_ERROR
}

axios.defaults.baseURL = 'api/';



axios.interceptors.response.use(
	(res) => {
    console.log(res.data)
    return res
  },
	(error: AxiosError) => {
		const { data, status, config } = error.response!;
    // console.log(data)
    toast.error(data as String)
		// switch (status) {
		// 	case StatusCodes.BAD_REQUEST:
		// 		toast.error(ReasonPhrases.BAD_REQUEST)
		// 		break;
		// 	case 401:
		// 		toast.error('unauthorised');
		// 		break;
		// 	case 404:
		// 		console.error('/not-found');
		// 		break;
		// 	case 500:
		// 		console.error('/server-error');
		// 		break;
		// }
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
	login: (data: TForm) => request.post<TUser>('/auth/login', data),
	logout: () => request.post<void>('/auth/logout'),
};

const boards = {
	fetchBoards: () => request.get<void>('/boards'),
};

const api = {
	auth,
	boards,
};

export default api;

// const errorHandler = (status: number) => {
// 	throw new Error(`Ошибка ${status}`);
// };

// export const fetchUser = async () => {
// 	const response = await fetch(REGISTER_ROUTE, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			username: 'test4',
// 			password: 'test111',
// 		}),
// 	});
// 	return response.json();
// };
