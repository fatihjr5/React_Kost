function Navbar() {
  return (
    <section className="flex px-6 md:px-10 lg:px-24 py-6 flex-row justify-between items-center bg-white shadow-sm">
        <img className='w-32' src="img/kusuma_logo.svg" alt="Kusuma Kost" />
        <section className="flex flex-row items-center gap-x-4">
          <a href="" className='text-sm font-normal text-gray-300 hover:text-[#7000FD] hover:font-medium transition'>Cara Pemesanan</a>
          <a href="" className='text-sm font-normal text-gray-300 hover:text-[#7000FD] hover:font-medium transition'>S&K Berlaku</a>
          <a href="" className='text-sm font-normal text-gray-300 hover:text-[#7000FD] hover:font-medium transition'>FAQ</a>
        </section>
    </section>
  )
}

export default Navbar