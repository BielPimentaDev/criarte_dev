import {createContext, useState} from 'react'

const AppContext = createContext()

export function AppContextProvider({children}){
    const [dayOfTable, setDayOfTable] = useState()
    const [monthWeekDay, setMonthWeekDay] = useState()
    const [data, setData] = useState()
    const [weekDay, setWeekDay] = useState()
    const [monthsShow, setMonthsShow] = useState(1)
    const [clients, setClients] = useState([])
    const [clientQtf, setClientQtf] = useState(0)
    return(
        <AppContext.Provider value={{ monthsShow, setMonthsShow, dayOfTable, setDayOfTable, monthWeekDay, setMonthWeekDay, data, setData,weekDay, setWeekDay, clients, setClients, clientQtf, setClientQtf}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext