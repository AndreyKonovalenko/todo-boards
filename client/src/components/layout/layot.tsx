import { Outlet } from 'react-router-dom';
import { Container, Typography, Link } from '@mui/material';
import HeaderBar from '../header-bar/header-bar';



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Layout = (): JSX.Element => {
  return (
    <Container >
      <HeaderBar/>
      <Outlet />
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Layout;
