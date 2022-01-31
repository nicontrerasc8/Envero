import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MetaTags from "../../Components/MetaTags";
import ProductCartList from "../../Components/ProductCartList";
import { firestore } from "../../Lib/Firebase";

const Brand = ({Products}) => {

     const router = useRouter()
     const {slug} = router.query

  return <>
     <MetaTags title={slug + " | SuMarket"}/>
     <div className='home-page'>
          <h2>{slug}</h2>
          <ProductCartList IsAdmin={false} carts={Products}/>
     </div>;
  </>
};

export default Brand;

export async function getServerSideProps({query}){
     var {slug} = query
     var ProductsQuery = firestore.collection("products").where("Marca", "==", slug)
     var Products = []

     await ProductsQuery.get().then(
          (querySnapshot) => {
               querySnapshot.forEach((doc) => {
                    Products.push(doc.data())
               })
          }
     )

     return {props: {Products}}
}
