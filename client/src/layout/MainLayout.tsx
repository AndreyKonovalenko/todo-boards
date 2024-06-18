import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import HeaderBar from '../components/header-bar/header-bar';

const MainLayout = (): JSX.Element => {
	return (
		<Box sx={{ display: 'flex', width: '100%' }}>
			<HeaderBar />
			<Box component='main' sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default MainLayout;

// <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
