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


export function CurrentCalendar({openModal}){
    return(
        
            <Calendar>
                
            <div className="flex  justify-center mt-10 flex-wrap  justify-items-start gap-5 sm:gap-10">
                
                <ul> <span>Segunda</span> 
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} /></li>                   
                </ul>
                <ul> <span>Terça</span> 
                <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>  
                </ul>
                <ul> <span>Quarta</span> 
                <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} /></li>  
                </ul>
                <ul> <span>Quinta</span> 
                <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>  
                </ul>
                <ul> <span>Sexta</span> 
                <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>  
                </ul>
                <ul> <span>Sábado</span> 
                <li><CalendarDay openModal={openModal} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} /></li>  
                </ul>
                <ul> <span>Domingo</span> 
                <li><CalendarDay openModal={openModal}isFull={'true'} /></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>
                    <li><CalendarDay openModal={openModal} isFull={'true'}/></li>  
                </ul>
               
            </div>


            </Calendar>
            
        
    )
}