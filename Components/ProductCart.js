import React from 'react';
import UseGeneralContext from '../Lib/Context';

const ProductCart = ({data, IsAdmin, DeleteProduct}) => {

     const { setProductData, ChangeProductCartValue } = UseGeneralContext()

     const OpenContainer = () => {
          setProductData(data)
          ChangeProductCartValue()
     }

  return <article>
       <img src={data.Imagen} loading='lazy'/>
       <h4>
            {data.Producto}
       </h4>
       <div>
            <p>Precio: <b>{data.Precio} soles</b></p>
            <p>Marca: <b>{data.Marca}</b></p>
       </div>
       {
            IsAdmin ? <button className='btn-primary' onClick={() => DeleteProduct(data.id)}>
               Eliminar
            </button> : <button className='btn-primary' onClick={OpenContainer}>
                 Comprar
            </button>
       }
  </article>;
};

export default ProductCart;
