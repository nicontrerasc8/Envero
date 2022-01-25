import { createContext, useContext, useEffect, useState } from "react";

const GeneralContext = createContext()
const UseGeneralContext = () => useContext(GeneralContext)

export const GeneralContextProvider = ({children}) => {
     const [AdminLoggedIn, setAdminLoggedIn] = useState(false)
     const [Password, setPassword] = useState("")
     const [OpenNav, setOpenNav] = useState(false);

     return <GeneralContext.Provider value={{AdminLoggedIn, setAdminLoggedIn, Password, setPassword, OpenNav, setOpenNav}}>
          {children}
     </GeneralContext.Provider>
}
export default UseGeneralContext