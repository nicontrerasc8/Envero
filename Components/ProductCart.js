import { motion } from 'framer-motion';
import React from 'react';
import { DropInFromLeft } from '../Lib/Animations';
import UseGeneralContext from '../Lib/Context';

const ProductCart = ({data, IsAdmin, DeleteProduct}) => {

     const { setProductData, ChangeProductCartValue } = UseGeneralContext()

     const OpenContainer = () => {
          setProductData(data)
          ChangeProductCartValue()
     }

  return <motion.article
     variants={DropInFromLeft}
     initial="hidden"
     animate="visible"
  >
       <img src={data.Imagen} loading='lazy'/>
       <h4>
            {data.Producto}
       </h4>
       <div>
            <p>Precio: <b>{data.Precio} soles</b></p>
            <p>Marca: <b>{data.Marca}</b></p>
       </div>
       {
            IsAdmin ? <button className='btn' onClick={() => DeleteProduct(data.id)}>
               Eliminar
            </button> : <button className='btn' onClick={OpenContainer}>
                 Comprar
            </button>
       }
  </motion.article>;
};

export default ProductCart;
