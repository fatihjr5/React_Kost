import PropTypes from "prop-types";
import { Link } from "react-router-dom"

function Cards({ title, alamat, harga, fasilitas, gambar }) {

  return (
    <Link to={`detail/${title}`}>
        {
          gambar ? (<img src={gambar} className="h-48 w-full bg-center object-cover rounded-tr-xl rounded-tl-xl" alt={title} />)
          : (<img src="img/dummy.png" className="h-48 w-full bg-center object-cover rounded-tr-xl rounded-tl-xl" alt="" />)
        }
        <section className="flex flex-row items-center justify-between mt-2">
            <div className="flex-flex-col gap-y-2">
                <h5 className="font-bold text-xl">{title}</h5>
                <p className="text-sm text-gray-400">{alamat}</p>
            </div>
            <h5 className="text-sm text-gray-400"><span className="text-[#7000fd] text-lg font-bold">{harga}</span>/bulan</h5>
        </section>
        <hr className="my-1"/>
        <h5 className="text-sm text-gray-400 truncate">{fasilitas}</h5>
    </Link>
  )
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  fasilitas: PropTypes.string.isRequired,
  gambar: PropTypes.string.isRequired
};

export default Cards