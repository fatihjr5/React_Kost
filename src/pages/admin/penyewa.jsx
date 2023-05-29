import { useState } from "react";
import { AdminLayout } from "../../layout"
import { Table, Modal } from 'antd';
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
function Penyewa() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModalImage = () => {
      setIsModalOpen(true);
    };
    const handleOkImage = () => {
      setIsModalOpen(false);
    };
    const handleCancelImage = () => {
      setIsModalOpen(false);
    };
    const columns = [
        {
          title: 'Nama Kost',
          dataIndex: 'namapenyewa',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Kos pilihan',
          dataIndex: 'kospilihan',
        },
        {
          title: 'No hp',
          dataIndex: 'nohp',
        },
        {
          title: 'Tgl Masuk',
          dataIndex: 'tglmasuk',
        },
        {
          title: 'Foto ktp',
          dataIndex: 'fotoktp',
        },
        {
          title: 'Bukti Pembayaran',
          dataIndex: 'bukti',
        },
        {
          title: 'Aksi',
          dataIndex: 'aksi',
        },
    ];
    const data = [
        {
          key: '1',
          namapenyewa: 'John Brown',
          status: 'Pelajar',
          kospilihan: '1',
          nohp: '085156216579',
          tglmasuk: '20 Maret 2040',
          fotoktp: <section>
                    <button onClick={showModalImage} className="ring-1 ring-gray-200 px-4 py-1 rounded-md">Lihat detail</button>
                    <Modal title="Namakos" open={isModalOpen} onOk={handleOkImage} onCancel={handleCancelImage}>
                      <img src="img/dummy.png" alt="" />
                    </Modal>
                  </section>,
          bukti: <section>
                    <button onClick={showModalImage} className="ring-1 ring-gray-200 px-4 py-1 rounded-md">Lihat detail</button>
                    <Modal title="Namakos" open={isModalOpen} onOk={handleOkImage} onCancel={handleCancelImage}>
                      <img src="img/dummy.png" alt="" />
                    </Modal>
                  </section>,
          aksi: <section className="flex flex-row gap-x-2">
                  <button className="bg-yellow-400 text-white p-2 rounded-md"><AiOutlineEdit/></button>
                  <button className="bg-red-600 text-white p-2 rounded-md"><BsTrash/></button>
                </section>,
        }
    ];
  return (
    <AdminLayout>
        <h5 className="text-2xl font-semibold">Kelola Info Penyewa</h5>
        <div className="mt-6">
            <Table columns={columns} dataSource={data}/>
        </div>
    </AdminLayout>
  )
}

export default Penyewa