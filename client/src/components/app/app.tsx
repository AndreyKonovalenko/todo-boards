import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layot';
import MainPage from '../../pages/main-page/main-page';
import { TO_BOARDS, TO_LOGIN, TO_REGISTER } from '../../utils/constants';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import BoardPage from '../../pages/board-page/board-page';
import ProtectedRoute from '../protected-route/protected-route';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../../styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<ProtectedRoute element={<MainPage />} />} />
						<Route path={TO_LOGIN} element={<LoginPage />} />
						<Route path={TO_REGISTER} element={<RegisterPage />} />
						{/* <Route path={`${TO_BOARDS}/:id`} element={<BoardPage/>}/> */}
						<Route path={`${TO_BOARDS}`} element={<BoardPage />} />
					</Route>
				</Routes>
				<ToastContainer />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
