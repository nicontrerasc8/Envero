import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MetaTags from "../../Components/MetaTags";
import ProductCartList from "../../Components/ProductCartList";
import { firestore } from "../../Lib/Firebase";

const Brand = () => {

     const [Data, setData] = useState([]);
     const router = useRouter()
     const { slug } = router.query

     useEffect(() => {
          console.log(slug)
          setData([])
          if(slug){
               const CartCollection = firestore.collection("products").where("Marca", "==", slug)
          CartCollection.get().then(
               (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                         setData(Data => [...Data, doc.data()])
                    })
               }
            )
          }
          else router.push("/")
     }, [slug]);
     

  return <>
     <MetaTags title={slug + " | SuMarket"}/>
     <div className='home-page'>
          <h2>{slug}</h2>
          <ProductCartList IsAdmin={false} carts={Data}/>
     </div>;
  </>
};

export default Brand;
