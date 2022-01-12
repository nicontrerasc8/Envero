import NavBar from '../Components/NavBar'
import { GeneralContextProvider } from '../Lib/Context'
import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/Admin.css'

function MyApp({ Component, pageProps }) {
  return <GeneralContextProvider>
    <NavBar/>
    <Component {...pageProps} />
  </GeneralContextProvider>
}

export default MyApp
