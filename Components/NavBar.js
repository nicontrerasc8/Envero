import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Categories } from '../Arrays'
import Logo from "../public/logo-greenBack.png"


const NavButton = ({text, ImgSource}) => {
     return <button className='btn-secondary'>
     <div>
          <LazyLoadImage src={ImgSource ? ImgSource : Logo}
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
                    <img src={"https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/logo-greenBack.png?alt=media&token=454b9719-6af5-4707-86b0-bc54b1959f88"} width={100} height={100}/>  
                    </a>
               </Link>  
               <Link href={"/"}>
                    <a>
                    <h2>SuMarket</h2>
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
                         Categories && Categories.map((data, idx) => {
                              return <NavButton key={idx} ImgSource={data.url} text={data.text}/>
                         })
                    }
               </ul>
          </aside>
     </>
}

export default NavBar
