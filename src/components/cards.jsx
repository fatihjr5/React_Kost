import { Link } from "react-router-dom"

function Cards() {
  return (
    <Link to="/detail">
        <img src="img/dummy.png" className="h-48 w-full bg-center object-cover rounded-tr-xl rounded-tl-xl" alt="" />
        <section className="flex flex-row items-center justify-between mt-2">
            <div className="flex-flex-col gap-y-2">
                <h5 className="font-bold text-xl">Kusumaja</h5>
                <p className="text-sm text-gray-400">Semarang, Indonesia</p>
            </div>
            <h5 className="text-sm text-gray-400"><span className="text-[#7000fd] text-lg font-bold">750.000</span>/bulan</h5>
        </section>
        <hr className="my-1"/>
        <h5 className="text-sm text-gray-400 truncate">K.Mandi Dalam -  AC - Kloset Salto - Wifi - Kasur - Furnitur</h5>
    </Link>
  )
}

export default Cards