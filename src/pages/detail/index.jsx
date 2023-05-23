import { Breadcrumb } from "antd"
import Main from "../../layout"
import { Link } from "react-router-dom"

function Detail() {
  return (
    <Main>
      <Breadcrumb className="my-6" items={[{title: <Link to="/">Home</Link>,},{title: 'Kost Kusumaja',}]}/>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src="img/dummy.png" className="w-full object-cover bg-center no-repeat rounded-tl-xl" alt="" />
        <div className="grid grid-cols-2 gap-2">
          <img className="w-full object-cover bg-center no-repeat" src="img/dummy.png" alt="" />
          <img className="w-full object-cover bg-center no-repeat rounded-tr-xl" src="img/dummy.png" alt="" />
          <img className="w-full object-cover bg-center no-repeat" src="img/dummy.png" alt="" />
          <img className="w-full object-cover bg-center no-repeat" src="img/dummy.png" alt="" />
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 my-6">
        {/* Info kost */}
        <div className="flex flex-col space-y-2">
          {/* Title & Address */}
          <section className="flex flex-col">
            <h5 className="font-bold text-3xl">Kusumaja</h5>
            <p className="text-base text-gray-400">Semarang, Indonesia</p>
          </section>
          {/* Description */}
          <p className="text-base text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus consectetur at, illum optio voluptas ipsa, omnis dignissimos alias eos dolore? Maxime, perferendis molestias soluta qui molestiae facilis, assumenda consequuntur doloribus doloremque odio nobis maiores libero ipsam ad fugiat alias.</p>
          {/* Fasilitas yang didapat */}
          <section className="flex flex-col">
            <h5 className="font-bold text-lg">Fasilitas yang didapat</h5>
            <p className="text-base text-gray-400">Semarang, Indonesia</p>
          </section>
          {/* Fasilitas umum */}
          <section className="flex flex-col">
            <h5 className="font-bold text-lg">Fasilitas Umum</h5>
            <p className="text-base text-gray-400">Semarang, Indonesia</p>
          </section>
        </div>
        {/* Pembayaran */}
        <div className="lg:ml-auto">
          <div className="p-4 rounded-xl bg-white shadow-md w-full lg:w-96">
            <section className="flex flex-col space-y-0.5">
              <h5 className="text-base text-gray-400"><span className="text-3xl font-semibold text-black">Rp 775.000</span> / bulan</h5>
              <p className="text-xs font-normal text-gray-400">*Harga sudah mencakup semuanya</p>
            </section>
            <section className="flex flex-row gap-x-2 mt-4">
              <Link to="#" className="w-full">
                <button className="w-full bg-gray-200 text-gray-600 rounded-md py-2 text-center">Ajukan Pertanyaan</button>
              </Link>
              <Link to="/checkout" className="w-full">
                <button className="w-full bg-[#7000FD] text-white rounded-md py-2 text-center">Sewa Sekarang</button>
              </Link>
            </section>
            <hr className="my-4"/>
            <section className="flex flex-col space-y-0.5">
              <h5 className="text-base">Metode Pembayaran</h5>
              <p className="text-xs font-normal text-gray-400">*Pembayaran melalui transfer manual dengan disertakan bukti transfer</p>
            </section>
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Detail