import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import HeaderBar from '../header-bar/header-bar';



const Layout = (): JSX.Element => {
  return (
    <Box sx={{height:'100%'}}> 
      <HeaderBar/>
      <Outlet />
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Box>
  );
};

export default Layout;
