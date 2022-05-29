import {Link} from 'react-router-dom'
import styled from 'styled-components'
import AppContext from '../context/AppContext'
import { useContext } from 'react'



const DayButton = styled.button`
            width:6rem;
            box-shadow: 5px 5px 10px gray;
            border-top-left-radius: 8px;
            background-color: ${props=> props.isFull ? 'var(--red-light)' : 'var(--green-light)' };
            transform:scale(1);
            transition: transform 0.3s ease-in-out;
            :hover{
                transform:scale(1.15)
            }
`

function CalendarDay({dayOfMonth, isFull, openModal, month}) {
    
    const {dayOfTable, setDayOfTable} = useContext(AppContext)
    const {monthWeekDay, setMonthWeekDay} = useContext(AppContext)
    
    
    function dayButtonClick(month){
            
            setDayOfTable(dayOfMonth)
            setMonthWeekDay(month)
            
    }

    return (
        
        <Link to='/clients-table'>
            <DayButton onClick={() => dayButtonClick(month)} isFull={isFull} >
            
            {dayOfMonth}
            </DayButton>        
        </Link>
        
        
        
     );
}

export default CalendarDay;