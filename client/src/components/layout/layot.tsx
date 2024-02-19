import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <>
        Header
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
