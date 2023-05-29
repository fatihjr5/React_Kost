import { Select } from "antd"
import {Main} from "../../layout"
import Cards from "../../components/cards"

function Home() {
    const filters = [
        {
            value: 'Harga Terendah',
            label: 'Harga Terendah'
        },
        {
            value: 'Harga Tertinggi',
            label: 'Harga Tertinggi'
        },
    ]
  return (
    <Main>
        <section className="flex flex-col md:flex-row items-center justify-between my-8">
            <h5 className="text-3xl font-semibold text-center md:text-left">Kami menyediakan kamar<br />kost dengan berbagai pilihan</h5>
            <div className="flex flex-row items-center gap-x-2 ml-auto mt-8 md:mt-0">
                <p className="text-base">Urutkan</p>
                <Select className="w-40" options={filters} placeholder/>
            </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Cards/>
            <Cards/>
            <Cards/>
        </section>
    </Main>
  )
}

export default Home