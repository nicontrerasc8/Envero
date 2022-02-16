import { useRouter } from 'next/router'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Categories } from '../../Arrays'
import MetaTags from '../../Components/MetaTags'

const CategoryButton = ({text, ImgSource, changeRoute}) => {

     return <button className='btn tertiary-btn' onClick={() => changeRoute(text)}>
                    <div>
                         <LazyLoadImage src={ImgSource}
                    />
                    </div>
               <h4>{text}</h4>
          </button>
}

const Categoria = () => {
     const router = useRouter()
     const ChangeRoute = (texto) => {
          router.push(`/categoria/${texto}`)
     }

  return <>
  <MetaTags title='Busca por categorias | SuMarket'/>
  <div className='page brands-page'>
       <h2>Elige lo que estás buscando</h2>
       <ul className='choose-brand'>
            {
                 Categories && Categories.map((data, idx) => {
                      return <CategoryButton key={idx} text={data.text} ImgSource={data.url} changeRoute={ChangeRoute}/>
                 })
            }
       </ul>
  </div>
</>;
}

export default Categoria