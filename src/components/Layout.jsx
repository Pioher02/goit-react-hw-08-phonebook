import { Suspense } from 'react';
import NavBar from './NavBar';
import { Dna } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ maxWidth: 960, margin: '0 auto', display:"flex", justifyContent:"center"}}>
        <Suspense
          fallback={
            <Dna
              visible={true}
              height="calc(100vh - 50px)"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
