import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import useKeypress from 'react-use-keypress'
import MetaTags from '../Components/MetaTags'
import UseGeneralContext from '../Lib/Context'

const PasswordComponent = () => {
     const {AdminLoggedIn, setAdminLoggedIn, Password, setPassword} = UseGeneralContext()
     const [VisiblePassword, setVisiblePassword] = useState(false)

     const VerifyPassword = () => {
          if(Password == "hola") setAdminLoggedIn(true)
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
           Submit
      </button>
 </div>
}

const AdminComponent = () => {
     return <div className='page admin-container'>
          <h2>Bienvenido a la sección de administrador</h2>
          <button className='btn-primary'>
               Añade productos
          </button>
          <h3>Productos actuales:</h3>
     </div>
}

const AdminPage = () => {

     const {AdminLoggedIn} = UseGeneralContext()

     return <>
     <MetaTags title='Administrador | Envero'/>
        {
             AdminLoggedIn ? <AdminComponent/>
              : <PasswordComponent/>
        }
     </>
}

export default AdminPage
