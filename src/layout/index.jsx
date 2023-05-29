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
        <section className='px-6 md:px-10 lg:px-24 py-6 flex justify-between'>
          <img className='w-32' src="img/kusuma_logo.svg" alt="" />
          <button className='w-20 ring-1 ring-gray-200 text-gray-600 rounded-md py-2'>Keluar</button>
        </section>
        <section className='flex flex-col md:flex-row px-6 md:px-10 lg:px-24'>
          <div className='flex flex-col w-40'>
            <Link to="/admin" className='text-base font-semibold mb-4'>Kost</Link>
            <Link to="/penyewa" className='text-base font-normal text-gray-400'>Penyewa Kost</Link>
          </div>
          <div className='md:ml-8 w-full mt-8 md:mt-4'>
            {children}
          </div>
        </section>
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