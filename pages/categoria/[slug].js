import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingComponent from "../../Components/Loading";
import MetaTags from "../../Components/MetaTags";
import ProductCartList from "../../Components/ProductCartList";
import { firestore } from "../../Lib/Firebase";

const Category = ({Products}) => {

     const router = useRouter()
     const { slug } = router.query  
     const [IsLoaded, setIsLoaded] = useState(false);
     
     useEffect(() => {
          setIsLoaded(false)
       setTimeout(() => {
            setIsLoaded(true)
       }, 1000);
     }, [slug]);
     

  return <>
     <MetaTags title={slug + " | SuMarket"}/>
    {
         IsLoaded ? <div className='home-page'>
               <h2>Categoría: {slug}</h2>
               <ProductCartList IsAdmin={false} carts={Products}/>
          </div> : <LoadingComponent/>
    }
  </>
};

export default Category;

export async function getServerSideProps({query}){
     var {slug} = query
     var ProductsQuery = firestore.collection("products").where("Categoria", "==", slug)
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