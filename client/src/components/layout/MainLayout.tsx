import { Outlet } from 'react-router-dom';
import HeaderBar from '../header-bar/header-bar';

const MainLayout = (): JSX.Element => {
	return (
		<>
			<Outlet />
		</>
	);
};




// return (
//   <Box sx={{ display: 'flex', width: '100%' }}>
//     <Header />
//     <Drawer />
//     <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
//       <Toolbar />
//       <Breadcrumbs navigation={navigation} title />
//       <Outlet />
//     </Box>
//   </Box>
// );

export default MainLayout;