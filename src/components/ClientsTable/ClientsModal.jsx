import React, { useState, useEffect } from 'react'
import {XCircle} from 'phosphor-react'
import {ClientsTable} from './ClientsTableStyle'
import RegisterModal from '../Register/RegisterModal'
import{Link} from 'react-router-dom'
import { Header } from '../Header'
import AppContext from '../../context/AppContext'

import { useContext } from 'react'
import axios from 'axios'

function ClientsModal({registerModal, closeModal}) {

    const [clients, setClients] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {dayOfTable, setDayOfTable} = useContext(AppContext)
    const {monthWeekDay, setMonthWeekDay} = useContext(AppContext)
    
    var newDay = dayOfTable
    if(dayOfTable <10){
        var newDay = '0' + dayOfTable
    }

    var newMonthYear = monthWeekDay
    if (monthWeekDay.slice(6,7) == ''){
        
        var newMonthYear = monthWeekDay.slice(0,5) + '0' + monthWeekDay.slice(5,6)
    }

    const dayUrl =newMonthYear + '-' + newDay
    
    

    
    
    
    
    const url = `https://thayxis.herokuapp.com/api/v1/days/${dayUrl}`

    
    
    
    function fetchData(){
        axios.get(url)
        .then(res=>setClients(res.data))
        .catch(err=> console.log(err))
        .finally(setIsLoading(false))
        
    }
    
    useEffect(
        () => {
            console.log(url)
            fetchData()
            
            
        },
            
        []
    )


  return (
      <>
      <Header/>
    <div className=" bg-fixed flex  justify-center bg-gray-400 bg-opacity-70 w-full h-[200%] absolute top-0 sm:h-[100%]">
        
        <div className=" fixed bg-zinc-50 shadow-2xl mt-10 shadow-gray-500 w-[100%] h-[100vh] top-[-40px] sm:w-[90%] sm:h-[80%] sm:top-[0] sm:rounded-2xl">
        
        <div className=' relative rounded-tl-lg flex-1 text-center'>
           
            <h1 className='  font-bold text-4xl mt-3 mb-3 uppercase  sm:text-center'>{monthWeekDay} {dayOfTable}</h1>
            
            <Link to='/' className='absolute right-0 top-[-15px]  sm:top-0 sm:right-5 '>
                 <XCircle size={32} weight="fill" color='red' />

            </Link> 
        </div>        
        
            
            <section className='max-h-[70%] overflow-y-scroll '>

                <ClientsTable>                    
                    <thead >
                        <tr >
                            <th>Cliente</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>                                        
                     
                        <tbody>
                            
                        {clients.map(client=>{
                            
                            return(
                                <tr valign="top"  className=''>

                                    <td >
                                        {client.client_name}
                                        <br/>
                                        <div >
                                            <b>Nome impresso</b>                                    
                                            <span >{client.printed_name}</span>
                                        </div>
                                        <div >
                                            <b>Sexo</b>                                    
                                            <span >{client.sex}</span>
                                        </div>
                                        <div >
                                            <b>Tema</b>                                    
                                            <span >{client.theme}</span>
                                        </div>
                                    </td>
        
                                    <td >
                                        {client.type}
                                        <br/><br/>
                                        <div >
                                            <label>Miolo <button></button></label>
                                            <label>Miolo <button></button></label>
                                            
                                        </div>
                                       
                                        
                                    </td> 
        
                                    <td >
                                    {client.price}
                                    <br/><br/>
                                        <div >
                                            <b>Pagamento</b>                                    
                                            <span >{client.payment}</span>
                                        </div>
        
                                    </td>
        
                                    <td >
                                        
                                            {client.client_state}
                                        <br/><br/>
                                        <div >
                                            <b>Estado</b>                                   
                                        </div>    
                                        <div >
                                            <b>Rua</b>                                   
                                            <span ><p>{client.client_address}</p></span>
                                        </div>                               
                                    
                                    </td>                        
                                                    
                                </tr>
                            )
                        })}    
                        </tbody>                 
                        

                        
                    

                </ClientsTable>
                <Link to='/client-register'><button  className='absolute bottom-5 right-[50%] translate-x-[50%] bg-brandOrange-500 text-white  w-[80%] h-[50px] rounded-lg max-w-[800px]'> CADASTRAR</button></Link>
            </section>
            
        </div>
        
    </div>
    </>
  )
}

export default ClientsModal