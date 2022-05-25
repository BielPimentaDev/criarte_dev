import axios from 'axios'
import { useEffect, useState } from 'react';
import CalendarDay from './CalendarDay'

export function Teste() {
    const [months, setMonths] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [monthsShow, setMonthsShow] = useState(0)
   

    
    const url = 'https://thayxis.herokuapp.com/api/v1/products'
    
    const callApi= async () => {
        const results = await axios.get(url)
        return results
    }

    async function fetchData(){
        const results = await callApi()
        const jsonData =Object.entries(results.data)
        
        setMonths(jsonData)
        setIsLoading(false)
    }
    
    
    useEffect(
        ()=>{        
            fetchData()

        }, [])
    

    return ( 
        <>
       {isLoading ? <p>Carregando...</p> : 
       <>
       
       <div>{months[monthsShow][0]} </div>
       <button onClick= {()=> setMonthsShow( monthsShow >= months.length - 1 ? monthsShow : monthsShow + 1)}>+</button>
       
       <button onClick= {()=> setMonthsShow( monthsShow > 0 ? monthsShow - 1 : monthsShow)}>-</button>

       <section  className='flex gap-2'>
           {
            Object.entries(months[monthsShow][1]).map( week=> {
                return (<div>{week[0]}
                
                {week[1].map(day =>{
                    return  <p >{(Object.keys(day))}</p>
                })}
                </div>)
            })
           }
       </section>
       </>
       
       } 

       
       
    
        </>

        )
    }