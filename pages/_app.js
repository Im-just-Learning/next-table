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
    useEffect(()=>{
        store.callsDefineCurrent(store.daysOfWeek[0])
        store.callsGetDay(store.currentDayId.id)
        store.groupsGetAll()
        store.setCurrentGroup(store.groupsList[0])
        store.changesBrief()
        store.changesDatesMapping()
    })
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
