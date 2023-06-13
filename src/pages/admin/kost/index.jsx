/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminLayout } from "../../../layout";
import { Input, Modal } from "antd"
import supabase from "../../../supabase";
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

function AdminKost () {
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
  // get data kost
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
  
  // delete data kost
  const deleteKos = async (itemId) => {
    try {
      const { error } = await supabase
        .from('tipe_kos')
        .delete()
        .eq('id', itemId);

      if (error) {
        console.error('Error deleting kos:', error.message);
        return;
      }

      console.log('Kos deleted successfully');
      // Refresh the list after deletion
      getItems();
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
            <Link to="/kelola-kost/tambah">Tambah Kost</Link>
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
                                  <Link to={`/kelola-kost/edit/${item.id}`}>
                                    <AiOutlineEdit className="text-white"/>
                                  </Link>
                                </button>
                                <button className="bg-slate-400 hover:bg-[#7000FD] transition p-2 rounded-md" onClick={() => deleteKos(item.id)}>
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

export default AdminKost