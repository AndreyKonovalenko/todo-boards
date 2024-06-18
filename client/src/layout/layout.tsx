import { Outlet } from 'react-router-dom';
import HeaderBar from '../components/header-bar/header-bar';

const Layout = (): JSX.Element => {
	return (
		<>
			<HeaderBar />
			<Outlet />
		</>
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

// mantis-free-react-admin-template
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
