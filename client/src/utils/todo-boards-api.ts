import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { TUser } from '../services/user/user-store';

export type TForm = {
	[key: string]: string;
};

axios.defaults.baseURL = 'api/';

axios.interceptors.response.use(
	(res) => res,
	(error: AxiosError) => {
		const { data, status, config } = error.response!;
		switch (status) {
			case 400:
				console.error(data);
				break;
			case 401:
				console.error('unauthorised');
				toast.error('unauthorised');
				break;
			case 404:
				console.error('/not-found');
				break;
			case 500:
				console.error('/server-error');
				break;
		}
		return Promise.reject(error);
	}
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body?: {}) =>
		axios.post<T>(url, body).then(responseBody),
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
