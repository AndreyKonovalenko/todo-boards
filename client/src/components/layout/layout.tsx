import { Outlet } from 'react-router-dom';
import HeaderBar from '../header-bar/header-bar';

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
