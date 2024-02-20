import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import HeaderBar from '../header-bar/header-bar';


const Layout = (): JSX.Element => {
  return (
    <Container >
      <HeaderBar/>
      <Outlet />
    </Container>
  
  );
};

export default Layout;
