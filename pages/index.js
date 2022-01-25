import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Brands, HighlightText } from '../Arrays'
import MetaTags from '../Components/MetaTags'
import ProductCartList from '../Components/ProductCartList'
import { DropInFromLeft } from '../Lib/Animations'
import UseGeneralContext from '../Lib/Context'
import { firestore } from '../Lib/Firebase'
import Waves from "../public/waves.svg"

const Landing = () => {

  const { setOpenNav } = UseGeneralContext()

  const OpenNavBar = () => setOpenNav(true)

  return <div className='landing'>
    <article>
        <h2>¿Qué se te antoja el día de hoy? <br/> <span className="typewriter">
        <Typewriter cursorStyle='|'
                loop={Infinity}
                words={HighlightText}/>.
          </span></h2>
        <button onClick={OpenNavBar} className='btn-primary'>Buscar productos</button>
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
