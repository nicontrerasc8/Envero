import { createContext, useContext, useEffect, useState } from "react";

const GeneralContext = createContext()
const UseGeneralContext = () => useContext(GeneralContext)

export const GeneralContextProvider = ({children}) => {
     const [AdminLoggedIn, setAdminLoggedIn] = useState(false)
     const [Password, setPassword] = useState("")

     return <GeneralContext.Provider value={{AdminLoggedIn, setAdminLoggedIn, Password, setPassword}}>
          {children}
     </GeneralContext.Provider>
}
export default UseGeneralContext