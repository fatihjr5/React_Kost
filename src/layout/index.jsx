import PropTypes from 'prop-types'
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

function Main({children}) {
  return (
    <>
      <Navbar/>
      <section className='px-6 md:px-10 lg:px-24'>
          {children}
      </section>
    </>
  )
}

function AdminLayout({ children }) {
  return (
    <> 
        <section className='px-6 md:px-10 lg:px-24 py-6 grid grid-cols-2 items-center'>
          <img className='w-32' src="img/kusuma_logo.svg" alt="" />
          <div className='flex items-center gap-x-4 ml-auto'>
            <section className='flex md:flex-row gap-x-2'>
              <Link to="/admin" className='text-base font-semibold'>Kost</Link>
              <Link to="/penyewa" className='text-base font-normal text-gray-400'>Penyewa Kost</Link>
            </section>
            <button className='w-20 ring-1 ring-gray-200 text-gray-600 rounded-md py-2'>Keluar</button>
          </div>
        </section>
        <div className='px-6 md:px-10 lg:px-24 w-full mt-8 md:mt-4'>
            {children}
        </div>
    </>
  );
}

// props
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Main, AdminLayout }