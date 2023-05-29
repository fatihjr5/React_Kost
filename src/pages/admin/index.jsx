import { useState } from "react";
import { AdminLayout } from "../../layout"
import { Table, Modal } from 'antd';
// icons
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
function Admin() {
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
          dataIndex: 'namakos',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Alamat',
          dataIndex: 'alamat',
        },
        {
          title: 'Deskripsi',
          dataIndex: 'deskripsi',
        },
        {
          title: 'Harga',
          dataIndex: 'harga',
        },
        {
          title: 'Gambar',
          dataIndex: 'gambar',
        },
        {
          title: 'Aksi',
          dataIndex: 'aksi',
        },
    ];
    const data = [
        {
          key: '1',
          namakos: 'John Brown',
          status: 'hampir penuh',
          alamat: 'New York No. 1 Lake Park',
          deskripsi: 'New York No. 1 Lake Park',
          harga: 'Rp 775.000',
          gambar: <section>
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
        <div className="flex flex-row items-center justify-between">
            <h5 className="text-2xl font-semibold">Kelola Kost</h5>
            <button className="px-4 bg-[#7000FD] text-white rounded-md py-2 text-center text-base">Tambah Kost</button>
        </div>
        <div className="mt-6">
            <Table columns={columns} dataSource={data}/>
        </div>
    </AdminLayout>
  )
}

export default Admin