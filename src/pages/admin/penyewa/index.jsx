/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { AdminLayout } from "../../../layout";
import supabase from "../../../supabase";
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";

function AdminPenyewa() {
  const [fetchError, setFetchError] = useState()
  const [items, setItems] = useState([])
  // get data penyewa
  const getItems = async() => {
    const {data, error} = await supabase
    .from('booking')
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
  // delete data penyewa
  const deletePenyewa = async (itemId) => {
    try {
      const { error } = await supabase
        .from('booking')
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
          <h5 className="text-2xl font-semibold mb-4">Kelola Info Penyewa</h5>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Nama Penyewa</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Kos Pilihan</th>
                        <th scope="col" className="px-6 py-3">No hp</th>
                        <th scope="col" className="px-6 py-3">Tgl Masuk</th>
                        <th scope="col" className="px-6 py-3">Foto KTP</th>
                        <th scope="col" className="px-6 py-3">Bukti Pembayaran</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                      </tr>
                  </thead>
                  <tbody>
                        {items &&
                          items.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4">{item.nama_penyewa}</th>
                              <td className="px-6 py-4">{item.status}</td>
                              <td className="px-6 py-4">{item.kos_dipilih}</td>
                              <td className="px-6 py-4">{item.no_hp}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{item.tgl_masuk}</td>
                              <td className="px-6 py-4">
                                <img src={item.ktp} alt={item.nama_penyewa} />
                              </td>
                              <td className="px-6 py-4">
                                <img src={item.bukti_pembayaran} alt="Tidak ada" />
                              </td>
                              <div className="px-6 py-4 flex flex-row items-center gap-x-2">
                                <button className="bg-slate-400 hover:bg-[#7000FD] transition p-2 rounded-md">
                                  <Link to={`/kelola-penyewa/edit/${item.id}`}>
                                    <AiOutlineEdit className="text-white"/>
                                  </Link>
                                </button>
                                <button className="bg-slate-400 p-2 hover:bg-[#7000FD] transition rounded-md" onClick={() => deletePenyewa(item.id)}>
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

export default AdminPenyewa