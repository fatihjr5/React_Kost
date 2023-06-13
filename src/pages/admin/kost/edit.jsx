import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "antd";
import supabase from "../../../supabase";

function EditKost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editKos, setEditKos] = useState({
    nama: '',
    gambar: '',
    harga: '',
    deskripsi: '',
    alamat: '',
    fasilitas: '',
  });

  useEffect(() => {
    const fetchKos = async () => {
      try {
        const { data, error } = await supabase
          .from('tipe_kos')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching kos:', error.message);
          return;
        }

        setEditKos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKos();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'gambar') {
      // Handle file/image input
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileData = reader.result;
        setEditKos((prevState) => ({
          ...prevState,
          [e.target.name]: fileData,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      // Handle other input fields
      setEditKos((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('tipe_kos')
        .update({
          nama_kos: editKos.nama,
          gambar_kost: editKos.gambar?.base64,
          harga_kos: editKos.harga,
          deskripsi: editKos.deskripsi,
          alamat_kos: editKos.alamat,
          fasilitas_kos: editKos.fasilitas
        })
        .eq('id', id);

      if (error) {
        console.error(error);
        return;
      }

      navigate('/kelola-kost');
    } catch (error) {
      console.error(error);
    }
  };

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
            value={editKos.nama}
            onChange={handleChange}
          />
        </div>
        {/* gambar */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Gambar kos</span>
          <input
            className='w-full ring-1 ring-slate-300 py-1 rounded-md p-2'
            type="file"
            name='gambar'
            onChange={handleChange}
          />
        </div>
        {/* harga */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Harga</span>
          <Input
            placeholder="Masukkan Nama kamu"
            name='harga'
            className="py-2"
            value={editKos.harga}
            onChange={handleChange}
          />
        </div>
        {/* deskripsi */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Deskripsi</span>
          <Input.TextArea
            placeholder="Masukkan Nama kamu"
            name='deskripsi'
            className="py-2"
            value={editKos.deskripsi}
            onChange={handleChange}
          />
        </div>
        {/* alamat */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Alamat</span>
          <Input
            placeholder="Masukkan Nama kamu"
            name='alamat'
            className="py-2"
            value={editKos.alamat}
            onChange={handleChange}
          />
        </div>
        {/* fasilitas */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium">Fasilitas</span>
          <Input
            placeholder="Masukkan Nama kamu"
            name='fasilitas'
            className="py-2"
            value={editKos.fasilitas}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className="ml-auto w-full py-2 bg-[#7000FD] text-white rounded-md">
          Kirim Sekarang
        </button>
      </form>
    </div>
  )
}

export default EditKost;