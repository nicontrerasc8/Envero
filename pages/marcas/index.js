import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { Brands } from '../../Arrays';
import MetaTags from '../../Components/MetaTags';

const Marcas = () => {

     const router = useRouter()
     const ChangeRoute = (route) => {
          router.push(`/marcas/${route}`)
     }

  return <>
     <MetaTags title='Encuentra las mejores marcas | SuMarket'/>
     <div className='page brands-page'>
          <h2>Encuentra las mejores marcas en SuMarket</h2>
          <section>
               {
                    Brands && Brands.map((data, idx) => {
                         return <article key={idx}>
                              <FontAwesomeIcon icon={data.icon}/>
                              <h3>{data.text}</h3>
                              <button className='btn' onClick={() => ChangeRoute(data.text)}>
                                   Ver productos
                              </button>
                         </article>
                    })
               }
          </section>
     </div>
  </>;
};

export default Marcas;
