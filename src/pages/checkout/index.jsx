/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import supabase from "../../supabase";
import { Main } from "../../layout"
import { Breadcrumb, DatePicker, Input, Upload } from "antd"
import dayjs from 'dayjs';

function Checkout() {
  const { name } = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const dateFormat = 'YYYY/MM/DD';
  // users state
  const [user, setUser] = useState({
    nama: '',
    status: '',
    kos:'',
    noTelp: '',
    tglMasuk: null,
    fotoKtp: '',
    buktiPembayaran: '',
  });

  // for breadcumb
  const fetchKos = async () => {
    try {
      const { data, error } = await supabase
        .from('tipe_kos')
        .select()
        .eq('nama_kos', name)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'fotoKtp' || e.target.name === 'buktiPembayaran') {
      // Handle file/image input
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileData = reader.result;
        setUser((prevState) => ({
          ...prevState,
          [e.target.name]: fileData,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      // Handle other input fields
      setUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleDateChange = (date) => {
    setUser((prevState) => ({
      ...prevState,
      tglMasuk: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('booking').insert([
        {
          nama_penyewa: user.nama,
          status: user.status,
          kos_dipilih : user.kos,
          no_hp: user.noTelp,
          tgl_masuk: user.tglMasuk,
          ktp: user.fotoKtp?.base64,
          bukti_transfer: user.buktiPembayaran?.base64,
        },
      ]);
  
      if (error) {
        console.error(error);
        return;
      }

      navigate('/success');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchKos()
  }, []);

  return (
    <Main>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 my-6">
        <section className="flex flex-col">
          <h5 className="text-xl font-semibold">Checkout</h5>
          <Breadcrumb items={[
            { title: <Link to="/">Home</Link> },
            { title: <Link to={`/detail/${item.nama_kos}`}>{item.nama_kos}</Link> },
            { title: (<p>Checkout</p>) },
          ]} />
        </section>
        <form onSubmit={handleSubmit}>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* row 1 */}
            <div className="flex flex-col space-y-2">
              {/* Nama */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Nama</span>
                <Input placeholder="Masukkan Nama kamu" name='nama' className="py-2" onChange={handleChange}/>
              </div>
              {/* Tipe Kost */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Tipe Kost</span>
                <Input placeholder="Kusumaja" className="py-2" name='kos' onChange={handleChange} />
              </div>
              {/* Tgl Masuk */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Tanggal Masuk</span>
                <DatePicker className='w-full py-2' onChange={handleDateChange} name='tglMasuk' defaultValue={dayjs(dateFormat)} format={dateFormat} />
              </div>
              {/* Metode Pembayaran */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Metode Pembayaran</span>
                <Input placeholder="Manual Transfer" className="py-2 placeholder:text-gray-600" readOnly onChange={handleChange} />
                <span className="text-xs text-gray-400">*Pembayaran hanya melalui transfer manual, dan disertai bukti transfer</span>
              </div>
            </div>
            {/* row 2 */}
            <div className="flex flex-col space-y-2">
              {/* Status */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Status</span>
                <Input placeholder="Status anda ( ex : Mahasiswa, Karyawan )" className="py-2" name='status' onChange={handleChange} />
              </div>
              {/* No telp */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">No Telp/ Whatsapp</span>
                <Input placeholder="Masukkan nomor telepon anda" className="py-2" type='number' name='noTelp' onChange={handleChange} />
              </div>
              {/* Foto KTP */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Foto KTP</span>
                <input className='w-full ring-1 ring-slate-300 py-1 rounded-md p-2' type="file" name='fotoKtp' onChange={handleChange} />
              </div>
              {/* Bukti Pembayaran */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium">Bukti Pembayaran</span>
                <input className='w-full ring-1 ring-slate-300 py-1 rounded-md p-2' type="file" name='buktiPembayaran' onChange={handleChange} />
              </div>
            </div>
            <button className="ml-auto w-full py-2 bg-gray-300 text-gray-600 rounded-md">
              <Link to={`/detail/${item.nama_kos}`}>Kembali</Link>
            </button>
            <button type='submit' className="ml-auto w-full py-2 bg-[#7000FD] text-white rounded-md">
              Kirim Sekarang
            </button>
          </section>
        </form>
      </div>
    </Main>
  )
}

export default Checkout;