import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import HeaderBar from '../header-bar/header-bar';

const Layout = (): JSX.Element => {
	return (
		<Box sx={{ height: '100vh' }}>
			<HeaderBar />
			<Box sx={{ height: 'inherit' }}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;

// .layout {
//   min-width: 1280px;
//   height: 1000px;
//   background: #131316;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .main {
//   width: 1240px;
//   height: 912px;
// }
