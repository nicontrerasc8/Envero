import Image from 'next/image';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCart = ({data, IsAdmin, DeleteProduct}) => {

  return <article>
       <img src={data.Imagen} effect='blur'/>
       <h4>
            {data.Producto}
       </h4>
       <div>
            <p>Precio: <b>{data.Precio} soles</b></p>
            <p>Empresa: <b>{data.Marca}</b></p>
       </div>
       {
            IsAdmin ? <button className='btn-primary' onClick={() => DeleteProduct(data.id)}>
               Eliminar
            </button> : <button className='btn-primary'>
                 Comprar
            </button>
       }
  </article>;
};

export default ProductCart;
