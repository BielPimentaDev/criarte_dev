import axios from 'axios'
import { useEffect, useState } from 'react';
import CalendarDay from './CalendarDay'
import { useContext } from 'react'
import AppContext from '../context/AppContext'

export function Teste() {

    const {dayOfTable, setDayOfTable} = useContext(AppContext)
    const {monthWeekDay, setMonthWeekDay} = useContext(AppContext)
    
    function dataReload(day, monthYear){
        if (day < 10){
            const newDay = '0'+ day
            return newDay
        }
        if(monthYear.length == 4){
            const newString = monthYear.slice(0,3) + '0' + monthYear.slice(3,4)
            return newString
        }
    }
    
    

    return ( 
        <> 
        {dataReload('5', '22-5')}
       <h1>TESTE</h1>
       </>

        )
    }