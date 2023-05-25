import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const [time, setTime] = useState(10);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const countdown = setInterval(()=>{
            setTime((prevTime)=>prevTime - 1);
        }, 1000)

        if (time === 0) {
            clearInterval(countdown);
            navigate('/')
        }

        return () => clearInterval(countdown);
    }, [time, navigate])
  return (
    <div className="my-8 text-center">
        <img className="mx-auto w-96 md:w-5/12" src="img/success.svg" alt="" />
        <div className="flex flex-col space-y-2 my-2">
            <h5 className='text-2xl md:text-3xl font-semibold'>Yeeayy! Transaksi Kamu Berhasil</h5>
            <p className='text-sm font-normal text-gray-400'>Sekarang kamu tunggu pesan masuk di hp kamu untuk <br className='block md:hidden' /> serah terima kunci kost</p>
        </div>
        <div className="bg-gray-100 px-4 py-2 w-fit mx-auto text-sm rounded-md">Kembali ke halaman utama dalam {time} detik</div>
    </div>
  )
}

export default Success