import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/layot';
import MainPage from '../../pages/main-page/main-page';
import { TO_BOARDS, TO_LOGIN, TO_REGISTER } from '../../utils/route-constants';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import BoardPage from '../../pages/board-page/board-page';
import { CssBaseline } from '@mui/material';


const App = (): JSX.Element => {
  return (
    <>
    <CssBaseline />
    <Routes>
        <Route path="/"  element={<Layout/>}>
            <Route index  element={<MainPage/>}/>
            <Route path={TO_LOGIN}  element={<LoginPage/>}/>
            <Route path={TO_REGISTER}  element={<RegisterPage/>}/>
            {/* <Route path={`${TO_BOARDS}/:id`} element={<BoardPage/>}/> */}
            <Route path={`${TO_BOARDS}`} element={<BoardPage/>}/> 
        </Route>
    </Routes>
    </>
  );

}

export default App;
