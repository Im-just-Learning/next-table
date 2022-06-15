import '../styles/globals.css'
import Store from '../store/store'
import {createContext, useContext, useEffect} from "react";

const store = new Store()

export const Context = createContext({
  store
})

function MyApp({ Component, pageProps }) {
    const {} = useContext(Context);
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Context.Provider value={{
        store
      }}>
        <Component {...pageProps} />
      </Context.Provider>
)
}

export default MyApp
