/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLayout } from "../../layout"
import { Input, Modal } from "antd"
import supabase from "../../supabase";
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

function Admin() {
  const [fetchError, setFetchError] = useState();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [createKos, setCreateKos] = useState(
    {
      nama: '',
      gambar: '',
      harga: '',
      deskripsi: '',
      alamat: '',
      fasilitas: '',
    }
  )
  // setting modal
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  // get data kos
  const getItems = async() => {
    const {data, error} = await supabase
    .from('tipe_kos')
    .select('*')

    if(error) {
      setFetchError('No data show')
      setItems(null)
    }
    if(data) {
      setItems(data)
      setFetchError(null)
    }
  }
  // create data kos
  const handleChange = (e) => {
    if (e.target.name === 'gambar') {
      // Handle file/image input
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileData = reader.result;
        setCreateKos((prevState) => ({
          ...prevState,
          [e.target.name]: fileData,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      // Handle other input fields
      setCreateKos((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('tipe_kos').insert([
        {
          nama_kos: createKos.nama,
          gambar_kost: createKos.gambar?.base64,
          harga_kos : createKos.harga,
          deskripsi: createKos.deskripsi,
          alamat_kos: createKos.alamat,
          fasilitas_kos: createKos.fasilitas
        },
      ]);
  
      if (error) {
        console.error(error);
        return;
      }

      navigate('/admin');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems()
  },[])
  return (
    <AdminLayout>
          <div className="flex flex-row items-center justify-between mb-4">
            <h5 className="text-2xl font-semibold">Kelola Kost</h5>
            <button onClick={showModal} className="px-4 py-2 bg-slate-400 hover:bg-[#7000FD] transition text-base text-white rounded-md">Tambah Kost</button>
            <Modal title="Tambah Kost" className="-translate-y-10" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
              <form onSubmit={handleSubmit} className="space-y-2 mt-4">
                {/* nama */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Nama</span>
                  <Input placeholder="Masukkan Nama kamu" name='nama' className="py-2" onChange={handleChange}/>
                </div>
                {/* gambar */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Gambar kos</span>
                  <input className='w-full ring-1 ring-slate-300 py-1 rounded-md p-2' type="file" name='gambar' onChange={handleChange} />
                </div>
                {/* harga */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Harga</span>
                  <Input placeholder="Masukkan Nama kamu" name='harga' className="py-2" onChange={handleChange}/>
                </div>
                {/* deskripsi */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Deskripsi</span>
                  <Input.TextArea placeholder="Masukkan Nama kamu" name='deskripsi' className="py-2" onChange={handleChange}/>
                </div>
                {/* alamat */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Alamat</span>
                  <Input placeholder="Masukkan Nama kamu" name='alamat' className="py-2" onChange={handleChange}/>
                </div>
                {/* fasilitas */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Fasilitas</span>
                  <Input placeholder="Masukkan Nama kamu" name='fasilitas' className="py-2" onChange={handleChange}/>
                </div>
                <button type='submit' className="ml-auto w-full py-2 bg-[#7000FD] text-white rounded-md">
                  Kirim Sekarang
                </button>
              </form>
            </Modal>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Nama Kost</th>
                        <th scope="col" className="px-6 py-3">Gambar Kos</th>
                        <th scope="col" className="px-6 py-3">Harga</th>
                        <th scope="col" className="px-6 py-3">Deskripsi</th>
                        <th scope="col" className="px-6 py-3">Alamat</th>
                        <th scope="col" className="px-6 py-3">Fasilitas</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                      </tr>
                  </thead>
                  <tbody>
                        {items &&
                          items.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4">{item.nama_kos}</th>
                              <td className="px-6 py-4">{item.gambar_kost}</td>
                              <td className="px-6 py-4">{item.harga_kos}</td>
                              <td className="px-6 py-4">{item.deskripsi.length > 10 ? `${item.deskripsi.slice(0, 30)}...` : item.deskripsi}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{item.alamat_kos}</td>
                              <td className="px-6 py-4">{item.fasilitas_kos}</td>
                              <div className="px-6 py-4 flex flex-row items-center gap-x-2">
                                <button className="bg-slate-400 hover:bg-[#7000FD] transition p-2 rounded-md">
                                  <AiOutlineEdit className="text-white"/>
                                </button>
                                <button className="bg-slate-400 hover:bg-[#7000FD] transition p-2 rounded-md">
                                  <BsTrash className="text-white"/>
                                </button>
                              </div>
                            </tr>
                        ))}
                  </tbody>
              </table>
          </div>
    </AdminLayout>
  )
}

export default Admin