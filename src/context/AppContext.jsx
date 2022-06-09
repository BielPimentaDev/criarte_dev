import {createContext, useState} from 'react'

const AppContext = createContext()

export function AppContextProvider({children}){
    const [dayOfTable, setDayOfTable] = useState()
    const [monthWeekDay, setMonthWeekDay] = useState()
    const [data, setData] = useState()
    const [weekDay, setWeekDay] = useState()
    const [monthsShow, setMonthsShow] = useState(1)
    return(
        <AppContext.Provider value={{ monthsShow, setMonthsShow, dayOfTable, setDayOfTable, monthWeekDay, setMonthWeekDay, data, setData,weekDay, setWeekDay}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext