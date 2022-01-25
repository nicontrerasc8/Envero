import React from 'react';
import LoadingComponent from './Loading';
import ProductCart from './ProductCart';

const ProductCartList = ({carts, IsAdmin, DeleteProduct}) => {
  return <div className='cart-list'>
       {
            carts.length > 0 ? carts.map((data,idx) => {
                 return <ProductCart data={data} key={idx} IsAdmin={IsAdmin} DeleteProduct={DeleteProduct}/>
            }) : <LoadingComponent/>
       }
  </div>;
};

export default ProductCartList;
