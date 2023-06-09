import { useState, useEffect } from "react";
import { Main } from "../../layout";
// import Cards from "../../components/cards";
import supabase from "../../supabase";
import Cards from "../../components/cards";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [items,setItems] = useState([]);

  useEffect(() => {
    const getItems = async() => {
      const {data, error} = await supabase
      .from('tipe_kos')
      .select('*')

      if(error) {
        setFetchError('No data show')
        setItems(null)
        console.log(error)
      }
      if(data) {
        setItems(data)
        setFetchError(null)
        console.log(data);
      }
    }
    getItems()
  },[])

  return (
    <Main>
      {fetchError && (<p>{fetchError}</p>)}
      <section className="flex flex-col md:flex-row items-center justify-between my-8">
        <h5 className="text-3xl font-semibold text-center md:text-left">
          Kami menyediakan kamar<br />kost dengan berbagai pilihan
        </h5>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items &&
          items.map((item) => (
            <Cards key={item.id} title={item.nama_kos} alamat={item.alamat_kos} harga={item.harga_kos} fasilitas={item.fasilitas_kos} gambar={item.gambar_kost}/>
          ))}
      </section>
    </Main>
  );
}

export default Home;