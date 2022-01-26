import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { HighlightText } from '../Arrays'
import MetaTags from '../Components/MetaTags'
import ProductCartList from '../Components/ProductCartList'
import UseGeneralContext from '../Lib/Context'
import { firestore } from '../Lib/Firebase'

const Landing = () => {

  const { setOpenNav } = UseGeneralContext()
  const router = useRouter()

  const SearchBrands = () => router.push("/marcas")

  const OpenNavBar = () => setOpenNav(true)

  return <div className='landing'>
    <article>
        <h2>¿Qué se te antoja el día de hoy? <br/> <span className="typewriter">
        <Typewriter cursorStyle='|'
                loop={Infinity}
                words={HighlightText}/>.
          </span></h2>
        <div>
        <button onClick={OpenNavBar} className='btn'>Buscar productos</button>
        <button onClick={SearchBrands} className='btn secondary-btn'>
          Buscar marcas
        </button>
        </div>
    </article>
      <FontAwesomeIcon icon={faShoppingCart} className='landing-icon'/>
  </div>
}

export default function Home() {
  
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    setProductData([])
    const CartCollection = firestore.collection("products")
    CartCollection.get().then(
       (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                 setProductData(ProductData => [...ProductData, doc.data()])
            })
       }
    )
  }, []);
  

  return <>
      <MetaTags/>
      <Landing/>
      <div className='page home-page non-margin'>
        <ProductCartList carts={ProductData} IsAdmin={false}/>
      </div>
    </>
}
