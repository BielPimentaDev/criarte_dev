import { Calendar, CaretLeft, CaretRight } from "phosphor-react";
import { CurrentCalendar } from "./CurrentCalendar";
import { Header } from "./Header";
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import {monthsTranslate, translateDictionary} from './DataConvert'
import AppContext from '../context/AppContext'


export function Main(){

    const [months, setMonths] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [monthsShow, setMonthsShow] = useState(1)
    const {data, setData} =  useContext(AppContext)

    
    const url = 'https://thayxis.herokuapp.com/api/v1/products'
    
    const callApi= async () => {
        const results = await axios.get(url)
        return results
    }

    async function fetchData(){
        const results = await callApi()
        const jsonData =Object.entries(results.data)
        setData(results.data)
        setMonths(jsonData)
        setIsLoading(false)
    }
    
    
    useEffect(
        ()=>{        
            fetchData()

        }, [])
    






    return(
        <>
        {isLoading ? <p>Carregando...</p> : 
        <>
    <Header/>
   
        
        
    <section className="flex justify-center m-10 sm:justify-end  ">
        <button className="flex items-center gap-2 uppercase bg-brandOrange-500 px-3 py-2 text-white rounded-2xl">
            <Calendar size={25} weight={"fill"}/>
            Calendário
            </button>
    </section>

    <section className="flex justify-center  ">
        
        <button onClick= {()=> setMonthsShow( monthsShow > 0 ? monthsShow - 1 : monthsShow)}>
            <CaretLeft size={32} weight="fill" /> 
        </button>
        <span className="font-bold text-lg ">{monthsTranslate((months[monthsShow][0]).slice(5,7)) + ' - ' + months[monthsShow][0].slice(0,4) }</span>
        <button onClick= {()=> setMonthsShow( monthsShow >= months.length - 1 ? monthsShow : monthsShow + 1)}>
            <CaretRight size={32} weight="fill" />
        </button>
        
    </section>
    

        <CurrentCalendar months = { Object.entries(months[monthsShow][1])} month = {months[monthsShow][0]}/>
    </>
    }
        
    </>
    )
    
}