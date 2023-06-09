/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import supabase from "../../supabase";
import {Main} from "../../layout"
import { Breadcrumb, Input } from "antd"

function Checkout() {
  const { name } = useParams();
  const [item, setItem] = useState([]);
  const NamaKos = async () => {
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

  

  useEffect(() => {
    NamaKos()
  }, []);
  return (
    <Main>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 my-6">
            <section className="flex flex-col">
              <h5 className="text-xl font-semibold">Checkout</h5>
              <Breadcrumb items={[{ title: <Link to="/">Home</Link> }, { title: <Link to={`/detail/${item.nama_kos}`}>{item.nama_kos}</Link>}, { title: (<p>Checkout</p>)}]}/>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* row 1 */}
              <div className="flex flex-col space-y-2">
                {/* Nama */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Nama</span>
                  <Input placeholder="Masukkan Nama kamu" className="py-2"/>
                </div>
                {/* Tipe Kost */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Tipe Kost</span>
                  <Input placeholder="Kusumaja" className="py-2" readOnly/>
                </div>
                {/* Tgl Masuk */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Tanggal Masuk</span>
                  <Input placeholder="Kusumaja" className="py-2"/>
                </div>
                {/* Metode Pembayaran */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Metode Pembayaran</span>
                  <Input placeholder="Kusumaja" className="py-2"/>
                  <span className="text-xs text-gray-400">*Pembayaran hanya melalui transfer manual, dan disertai bukti transfer</span>
                </div>
              </div>
              {/* row 2 */}
              <div className="flex flex-col space-y-2">
                {/* Status */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Status</span>
                  <Input placeholder="Status anda ( ex : Mahasiswa, Karyawan )" className="py-2"/>
                </div>
                {/* No telp */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">No Telp/ Whatsapp</span>
                  <Input placeholder="Masukkan nomor telepon anda" className="py-2" readOnly/>
                </div>
                {/* Foto KTP */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Foto KTP</span>
                  <Input placeholder="Kusumaja" className="py-2"/>
                </div>
                {/* Bukti Pembayaran */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Bukti Pembayaran</span>
                  <Input placeholder="Kusumaja" className="py-2"/>
                </div>
              </div>
              <button className="ml-auto w-full py-2 bg-gray-300 text-gray-600 rounded-md">Batal</button>
              <button className="ml-auto w-full py-2 bg-[#7000FD] text-white rounded-md">
                <Link to="/success">Kirim Sekarang</Link>
              </button>
            </section>
        </div>
    </Main>
  )
}

export default Checkout