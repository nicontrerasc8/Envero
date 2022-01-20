import NavBar from '../Components/NavBar'
import { GeneralContextProvider } from '../Lib/Context'
import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/Admin.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return <GeneralContextProvider>
    <NavBar/>
    <Component {...pageProps} />
    <Toaster
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        error: {
          duration: 5000,
          style: {
              background: "rgb(230,50,0)",
              color: "var(--white)",
              fontWeight: "600",
              border: "3px solid",
          },
        },
        success:{
            icon: '🚀',
            duration: 5000,
            style: {
                background: "var(--green)",
                color: "var(--white)",
                fontWeight: "600",
                border: "3px solid",
            },
        }
      }}
    />
  </GeneralContextProvider>
}

export default MyApp
