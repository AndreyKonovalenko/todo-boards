import axios, { AxiosResponse } from 'axios';
import { REGISTER_ROUTE, LOGIN_ROUTE } from './constants';

type TForm = {
	[key: string]: string;
};

type TUser = {
	id: string;
	username: string;
};

axios.defaults.baseURL = 'app/';

const errorHandler = (status: number) => {
	throw new Error(`Ошибка ${status}`);
};

export const fetchUser = async () => {
	const response = await fetch(REGISTER_ROUTE, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'test4',
			password: 'test111',
		}),
	});
	return response.json();
};
