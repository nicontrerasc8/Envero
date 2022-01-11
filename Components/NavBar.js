import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../public/logo.png"
import Aceite from "../public/aceite.svg"
import Cafe from "../public/cafe.svg"
import Cereales from "../public/cereales.svg"
import FrutosSecos from "../public/frutos-secos.svg"
import Miel from "../public/honey.svg"
import Lacteos from "../public/milk.svg"
import Sal from "../public/salt.svg"

const CategoriesData = [
     {
          image: Aceite,
          text:"Aceite"
     },
     {
          image: Cafe,
          text:"Café"
     },
     {
          image: Cereales,
          text:"Cereales"
     },
     {
          image: FrutosSecos,
          text: "Frutos secos"
     },
     {
          image: Miel,
          text:"Miel"
     },
     {
          image: Lacteos,
          text: "Lácteos"
     },
     {
          image: Sal,
          text:"Sal"
     },
]

const NavButton = ({text, ImgSource}) => {
     return <button>
     <div>
          <Image src={ImgSource} sizes="320 640 750" quality={100} layout="responsive"
       />
     </div>
     <h4>{text}</h4>
</button>
}

const NavBar = () => {
     const [IsOpen, setIsOpen] = useState(false)
     const OpenNavigation = () => {
          setIsOpen(!IsOpen)
     }
     return <>
          <nav>
               <Link href={"/"}>
                    <a>
                    <Image src={Logo} width={100} height={100}/>  
                    </a>
               </Link>  
               <Link href={"/"}>
                    <a>
                    <h2>Envero</h2>
                    </a>
               </Link> 
               <div onClick={OpenNavigation} className={IsOpen ? 'hamburger open-nav' : 'hamburger'}>
                    <span className='hamburger-1'/>
                    <span className='hamburger-2'/>
                    <span className='hamburger-3'/>
               </div>
          </nav>
          <aside className={IsOpen ? 'ActiveAside' : null}>
               <h2>Categorias</h2>
               <ul>
                    {
                         CategoriesData && CategoriesData.map((data, idx) => {
                              return <NavButton key={idx} ImgSource={data.image} text={data.text}/>
                         })
                    }
               </ul>
          </aside>
     </>
}

export default NavBar
