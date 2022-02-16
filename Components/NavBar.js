import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Categories } from '../Arrays'
import UseGeneralContext from '../Lib/Context'


/* const WhiteLogo = "https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/output-onlinepngtools%20(12).png?alt=media&token=e269f307-4efe-4f75-8b7b-f926ed871174"
const GreenLogo = "https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/output-onlinepngtools%20(11).png?alt=media&token=26449151-5808-4b87-92ea-fafd19612356"
 */
const NavBar = () => {
     
     const { OpenNav, setOpenNav } = UseGeneralContext()
     const [NavActiveColor, setNavActiveColor] = useState(false);
     const OpenNavigation = () => {
          setOpenNav(!OpenNav)
     }
     const router = useRouter()
     const ChangeRoute = (text) => {
          router.push(`/${text}`)
          setOpenNav(false)
     }
     const GoHome = () => {
          router.push("/")
          setOpenNav(false)
     }

     useEffect(()=>{
          const HandleScroll = () => {
               setNavActiveColor(window.scrollY > 100)
          }
          window.addEventListener("scroll", HandleScroll)
    
          return () => {
              window.removeEventListener("scroll", HandleScroll)
          }
      }, [])
      

     return <>
          <nav className={NavActiveColor ? 'active-nav' : null}>
                    <h2 onClick={GoHome}>S<span>u</span>M<span>arket</span></h2>
               <div onClick={OpenNavigation} className={OpenNav ? 'hamburger open-nav' : 'hamburger'}>
                    <span className='hamburger-1'/>
                    <span className='hamburger-2'/>
                    <span className='hamburger-3'/>
               </div>
               <div className='nav-buttons'>
         <button className='btn' onClick={() => ChangeRoute("marcas")}>
              Marcas
         </button>
         <button className='btn secondary-btn' onClick={() => ChangeRoute("categoria")}>
               Categorias
         </button>
         {/* <button className='btn tertiary-btn white-color'>
              Ofertas
         </button> */}
    </div>
          </nav>
          <div className="custom-shape-divider-top-1643117872">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={"shape-fill"}></path>
    </svg>
    
</div>
          <aside className={OpenNav ? 'ActiveAside' : null}>
               <button className='btn' onClick={() => ChangeRoute("marcas")}>
                    Marcas
               </button>
               <button className='btn secondary-btn' onClick={() => ChangeRoute("categoria")}>
                    Categorias
               </button>
          </aside>
     </>
}

export default NavBar
