import {createContext, useState} from 'react'

const AppContext = createContext()

export function AppContextProvider({children}){
    const [dayOfTable, setDayOfTable] = useState()
    const [monthWeekDay, setMonthWeekDay] = useState()
    const [data, setData] = useState()
    return(
        <AppContext.Provider value={{ dayOfTable, setDayOfTable, monthWeekDay, setMonthWeekDay, data, setData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext