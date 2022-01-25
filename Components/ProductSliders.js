import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { DropInFromLeft, DropInFromTop } from '../Lib/Animations';
import UseGeneralContext from '../Lib/Context';
import BackDrop from './Backdrop';

const ProductSliders = () => {

     const { ProductData, ProductCartAvailable, ChangeProductCartValue } = UseGeneralContext()

     const [Counter, setCounter] = useState(1);

     const CloseCart = () => {
          ChangeProductCartValue()
          setCounter(1)
     }

     const ReduceCount = () => {
          if(Counter > 1) setCounter(Counter - 1)
     }

  return <BackDrop onClick={CloseCart} isOn={ProductCartAvailable}>
       <motion.div
       className='product-cart-form'
          onClick={(e) => e.stopPropagation()}
          variants={DropInFromTop}
          initial="hidden"
          animate="visible"
          exit="exit"
       >
            <h4>{ProductData.Producto}</h4>
            <span className='counter'>
               <button style={{borderRadius:"5px 0 0 5px"}} onClick={ReduceCount}>
                    -
               </button>
               {Counter}
               <button style={{borderRadius:"0 5px 5px 0"}} onClick={() => setCounter(Counter+1)}>
                    +
               </button>
          </span>
            <p>Precio total: <strong>s/.{Counter * ProductData.Precio}</strong></p>
            <a target={"_blank"} rel='noreferrer' href={`https://api.whatsapp.com/send?phone=51949161510&text=${`¡Hola! vengo de la web de bungalows PH. Me gustaría ordenar ${Counter} unidad${Counter > 1 ? "es": ""} de ${ProductData.Producto}.`}`}>
                 <button className='btn-primary'>
                    Comprar
                 </button>
            </a>
       </motion.div>
  </BackDrop>
};

export default ProductSliders;
