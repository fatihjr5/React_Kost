/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { AdminLayout } from "../../layout"
import supabase from "../../supabase";
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
function Penyewa() {
  const [fetchError, setFetchError] = useState()
  const [items, setItems] = useState([])
  useEffect(() => {
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
                              <td className="px-6 py-4">{item.ktp}</td>
                              <td className="px-6 py-4">{item.bukti_pembayaran}</td>
                              <div className="px-6 py-4 flex flex-row items-center gap-x-2">
                                <button className="bg-slate-400 p-2 rounded-md">
                                  <AiOutlineEdit className="text-white"/>
                                </button>
                                <button className="bg-slate-400 p-2 rounded-md">
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

export default Penyewa