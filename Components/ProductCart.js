import React from 'react';

const ProductCart = ({data, IsAdmin, DeleteProduct}) => {

  return <article>
       <img src={data.Imagen} effect='blur'/>
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
            </button> : <a href={`https://api.whatsapp.com/send?phone=51949161510&text=${`¡Hola! vengo de la web de bungalows PH. Me gustaría ordenar ${data.Producto}.`}`} rel='noreferrer' target="_blank">
               <button className='btn-primary'>
                 Comprar
               </button>
            </a>
       }
  </article>;
};

export default ProductCart;
