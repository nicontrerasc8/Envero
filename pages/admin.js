import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useKeypress from 'react-use-keypress'
import uuid from 'react-uuid'
import { Brands, Categories } from '../Arrays'
import LoadingComponent from '../Components/Loading'
import MetaTags from '../Components/MetaTags'
import ProductCartList from '../Components/ProductCartList'
import Selector from '../Components/Selector'
import UseGeneralContext from '../Lib/Context'
import { firestore, storage } from '../Lib/Firebase'

const PasswordComponent = () => {
     const {AdminLoggedIn, setAdminLoggedIn, Password, setPassword} = UseGeneralContext()
     const [VisiblePassword, setVisiblePassword] = useState(false)

     const VerifyPassword = () => {
          if(Password == "racing") setAdminLoggedIn(true)
          else {
               alert("Incorrecto, intenta de nuevo")
          }
     }

     useKeypress(["Enter"],(event) => {
          if(event.key === "Enter" && !AdminLoggedIn){
              VerifyPassword()
          }
      })

      return <div className='Admin-SignIn'>
      <span>
           <input 
                type={VisiblePassword ? "text" : "password"} 
                value={Password} 
                placeholder='Contraseña'
                onChange={(e) => setPassword(e.target.value)}/>
                <button type='button' onClick={() => setVisiblePassword(!VisiblePassword)}>
                     <FontAwesomeIcon icon={VisiblePassword ? faEyeSlash : faEye}/>
                </button>
      </span>
      <button type='button' className='btn-primary' onClick={VerifyPassword}>
           <strong>
                Submit
           </strong>
      </button>
 </div>
}


const AdminComponent = () => {

     const [ProductName, setProductName] = useState("");
     const [Category, setCategory] = useState("Selecciona la categoria");
     const [OpenCategory, setOpenCategory] = useState(false);
     const [Brand, setBrand] = useState("Selecciona la marca");
     const [OpenBrand, setOpenBrand] = useState(false);
     const [Price, setPrice] = useState(Number);
     const [Loading, setLoading] = useState(false);
     const [DownloadURL, setDownloadURL] = useState(null);
     const [CartData, setCartData] = useState([]);

     const UploadFile = async(e) => {
          const file =  Array.from(e.target.files)[0];
          var ImageUuid = uuid()
          setLoading(true)
          const ref = storage.ref(`uploads/${Date.now()}.${ImageUuid}`)

          const task = ref.put(file)

          task
          .then((d) => ref.getDownloadURL())
          .then((url) => {
               setDownloadURL(url);
               setLoading(false)
             });

     }

     const SubmitFormData = async() => {

         if(ProductName != "" && Price > 0 && Category != "Selecciona la categoria" && Brand != "Selecciona la marca" && DownloadURL){
          var Uuid = uuid()
          const ProductDoc = firestore.doc(`/products/${Uuid}`)
          const Batch = firestore.batch()
          Batch.set(
               ProductDoc, {
                    Producto: ProductName,
                    Precio: Price,
                    Categoria: Category,
                    Marca: Brand,
                    Imagen: DownloadURL,
                    id: Uuid,
               }
          )
          await Batch.commit().then(
               setProductName(""),
               setPrice(0),
               setCategory("Selecciona la categoria"),
               setBrand("Selecciona la marca"),
               setDownloadURL(""),
               toast.success("Listo, subiste el producto con éxito.")
          )
         } else toast.error("Por favor ingeniero, rellene el formulario.")
     }

     const ChangeCategory = (data) => {
          setCategory(data)
          setOpenCategory(false)
     }

     const ChangeBrand = (data) => {
          setBrand(data)
          setOpenBrand(false)
     }

     const DeleteProduct = async(uID) => {
          setLoading(true)
          const ProductDoc = firestore.doc(`/products/${uID}`)
          await ProductDoc.delete();
          toast.success("Producto eliminado con éxito, doctor.")
          setLoading(false)
     }

     useEffect(() => {
       setCartData([])
       setLoading(true)
       const CartCollection = firestore.collection("products")
       CartCollection.get().then(
          (querySnapshot) => {
               querySnapshot.forEach((doc) => {
                    setCartData(CartData => [...CartData, doc.data()])
               })
          }
       )
       setLoading(false)
     }, [DownloadURL, ]);
     

     return <div className='page admin-container'>
          {Loading && <LoadingComponent/>}
          <h2>Bienvenido a la sección de administrador</h2>
          <div className='add-product-form'>
               <label>
                    Nombre del producto
               </label>
               <input value={ProductName} onChange={(e) => setProductName(e.target.value)}/>
               <label>
                    Escribe el precio en soles
               </label>
               <input type={"number"} min={0} value={Price} onChange={(e) => setPrice(e.target.value)}/>
               
               <Selector ChangeOpenValue={() => setOpenCategory(!OpenCategory)} 
                         ClassName={OpenCategory ? 'selector admin-selector active' : 'selector admin-selector'} 
                         TextValue={Category} 
                         IsOpen={OpenCategory} 
                         Options={Categories}
                         ChangeFN={ChangeCategory}
                         />
               <Selector ChangeOpenValue={() => setOpenBrand(!OpenBrand)} 
                         ClassName={OpenBrand ? 'selector admin-selector active' : 'selector admin-selector'} 
                         TextValue={Brand}
                         IsOpen={OpenBrand}
                         Options={Brands}
                         ChangeFN={ChangeBrand}
                    />
                    <label>Elije una imagen</label>
               <input type="file" onChange={UploadFile} accept="image/x-png,image/gif,image/jpeg" />
               {DownloadURL ? <a href={DownloadURL} rel="noreferrer" target="_blank">Link de la imagen</a>:<p>Por favor sube la imagen</p>}
               <input type={"text"} placeholder='Link de la imagen' value={DownloadURL} onChange={(e) => setDownloadURL(e.target.value)}/>
               <button className='btn-primary' onClick={SubmitFormData} type='button'>
                    Añade el producto
               </button>
          </div>
          <h3>Productos actuales:</h3>
          <ProductCartList carts={CartData} IsAdmin={true} DeleteProduct={DeleteProduct}/>
     </div>
}

const AdminPage = () => {

     const {AdminLoggedIn} = UseGeneralContext()

     return <>
     <MetaTags title='Administrador | SuMarket'/>
        {
             AdminLoggedIn ? <AdminComponent/>
              : <PasswordComponent/>
        }
     </>
}

export default AdminPage
