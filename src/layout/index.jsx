import PropTypes from 'prop-types'
import Navbar from '../components/navbar';

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

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main