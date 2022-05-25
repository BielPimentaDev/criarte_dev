import CalendarDay from "./CalendarDay";
import styled from 'styled-components'

import dataTranslate from './DataConvert'


const Calendar = styled.div`
    ul{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    span{
        font-weight: bold;

    }
    li{
        margin: 10px 0;
    }
    
`
const translateDictionary = {
    '1' : 'Janeiro',
    '2' : 'Fevereiro',
    '3' : 'Março',
    '4' : 'Abril',
    '5' : 'Maio',
    '6' : 'Junho',
    '7' : 'Julho',
    '8' : 'Agosto',
    '9' : 'Setembro',
    '10' : 'Outubro',
    '11' : 'Novembro',        
    '12' : 'Dezembro',
    'monday': 'Segunda-feira',
    'tuesday': 'Terça-feira',
    'wednesday' : 'Quarta-feira',
    'thursday' : 'Quinta-feira',
    'friday' : 'Sexta-feira',
    'saturday' : 'Sábado',
    'sunday' : 'Domingo'
}

export function CurrentCalendar({openModal, months}){
    return(
        
            <Calendar>
                
            <div className="flex  justify-center mt-10 flex-wrap  justify-items-start gap-5 sm:gap-10">
                
                {
                    months.map(week =>{
                        return(
                           <div className= ' flex flex-col gap-4'>
                               <span>{translateDictionary[week[0]]}</span>

                               <div className=' flex flex-col gap-5'>
                                   {
                                       week[1].map(day=>{
                                           if( Object.keys(day) == 0){
                                               return <p> <br/> </p>
                                           }
                                           else{
                                               return  <CalendarDay dayOfMonth =  {Object.keys(day)}  />
                                           }
                                       })
                                   }
                               </div>
                           

                           </div>
                        )
                    })
                }
               
            </div>


            </Calendar>
            
        
    )
}