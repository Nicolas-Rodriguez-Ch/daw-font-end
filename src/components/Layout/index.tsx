import { Outlet } from 'react-router';

import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <main className='bg-steel-100'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
