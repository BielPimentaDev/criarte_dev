import CalendarDay from "./CalendarDay";
import styled from 'styled-components'

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


export function CurrentCalendar({openModal, months}){
    return(
        
            <Calendar>
                
            <div className="flex  justify-center mt-10 flex-wrap  justify-items-start gap-5 sm:gap-10">
                
                {
                    months.map(week =>{
                        return(
                           <div className= ' flex flex-col'>
                               <span>{week[0]}</span>

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