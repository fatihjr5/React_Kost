/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DatePicker, Input } from "antd";
import supabase from "../../../supabase";
import dayjs from "dayjs";

function EditPenyewa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateFormat = 'YYYY/MM/DD';
  const [user, setUser] = useState({
    nama: '',
    status: '',
    kos:'',
    noTelp: '',
    tglMasuk: null,
    fotoKtp: '',
    buktiPembayaran: '',
  });
    // get data penyewa
    const fetchPenyewa = async () => {
      try {
        const { data, error } = await supabase
          .from('booking')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching kos:', error.message);
          return;
        }
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    // edit data penyewa
    const handleChange = (e) => {
        if (e.target.name === 'gambar') {
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
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { error } = await supabase
          .from('booking')
          .update({
            nama_penyewa: user.nama,
            status: user.status,
            kos_dipilih : user.kos,
            no_hp: user.noTelp,
            tgl_masuk: user.tglMasuk,
            ktp: user.fotoKtp?.base64,
            bukti_transfer: user.buktiPembayaran?.base64,
          })
          .eq('id', id);

        if (error) {
          console.error(error);
          return;
        }

        navigate('/kelola-penyewa');
      } catch (error) {
        console.error(error);
      }
    };

    const handleDateChange = (date) => {
        setUser((prevState) => ({
          ...prevState,
          tglMasuk: date,
        }));
    };

  useEffect(() => {
    fetchPenyewa();
  }, [id]);

  return (
    <div className="w-8/12 mx-auto mt-14">
      <form onSubmit={handleSubmit} className="space-y-2 mt-4">
        {/* nama */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Nama</span>
          <Input
            placeholder="Masukkan Nama kamu"
            name='nama'
            className="py-2"
            value={user.nama}
            onChange={handleChange}
          />
        </div>
        {/* status */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Status</span>
          <Input
            placeholder="Masukkan Nama kamu"
            name='nama'
            className="py-2"
            value={user.status}
            onChange={handleChange}
          />
        </div>
        {/* kost dipilih */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Kos yang dipilih</span>
          <Input
            placeholder="Edit Kost dipilih"
            name='nama'
            className="py-2"
            value={user.kos}
            onChange={handleChange}
          />
        </div>
        {/* no telp */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">No HP</span>
          <Input
            placeholder="Edit no Telp"
            name='nama'
            className="py-2"
            value={user.noTelp}
            onChange={handleChange}
          />
        </div>
        {/* no telp */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Tanggal Masuk</span>
          <DatePicker className='w-full py-2' onChange={handleDateChange} name='tglMasuk' defaultValue={dayjs(dateFormat)} format={dateFormat}/>
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
        <button type='submit' className="ml-auto w-full py-2 bg-[#7000FD] text-white rounded-md">
          Kirim Sekarang
        </button>
      </form>
    </div>
  )
}

export default EditPenyewa;