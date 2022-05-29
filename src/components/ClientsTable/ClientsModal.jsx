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

    
    const {dayOfTable, setDayOfTable} = useContext(AppContext)
    const {monthWeekDay, setMonthWeekDay} = useContext(AppContext)
    const {data, setData} = useContext(AppContext)
    
   
    



  return (
      <>
      <Header/>
    <div className=" bg-fixed flex  justify-center bg-gray-400 bg-opacity-70 w-full h-[200%] absolute top-0 sm:h-[100%]">
        
        <container className=" fixed bg-zinc-50 shadow-2xl mt-10 shadow-gray-500 w-[100%] h-[100vh] top-[-40px] sm:w-[90%] sm:h-[80%] sm:top-[0] sm:rounded-2xl">
        
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
                    <tbody >                       
                     
                        <tr valign="top"  className=''>

                            <td >
                                <h2>Gabriel</h2>
                                <br/>
                                <div >
                                    <b>Nome impresso</b>                                    
                                    <span >Guilherme</span>
                                </div>
                                <div >
                                    <b>Sexo</b>                                    
                                    <span >Masculino</span>
                                </div>
                                <div >
                                    <b>Tema</b>                                    
                                    <span >Estrelas</span>
                                </div>
                            </td>

                            <td >
                                Caderno
                                <br/><br/>
                                <div >
                                    <label>Miolo <button></button></label>
                                    <label>Miolo <button></button></label>
                                    
                                </div>
                               
                                
                            </td> 

                            <td >
                            R$ 50,00
                            <br/><br/>
                                <div >
                                    <b>Pagamento</b>                                    
                                    <span >PIX</span>
                                </div>

                            </td>

                            <td >
                                Niterói
                                <br/><br/>
                                <div >
                                    <b>Estado</b>                                   
                                    <span >RJ</span>
                                </div>    
                                <div >
                                    <b>Rua</b>                                   
                                    <span ><p>Rua justina bulhões, n2 bloco3 ap507</p></span>
                                </div>                               
                            
                            </td>                        
                                            
                        </tr>
                        
                        {

                           Object.values(data[monthWeekDay]).forEach(day=>{
                               day.forEach(newDay=>{
                                   if (dayOfTable[0] == Object.keys(newDay)[0]){
                                       Object.values(newDay).forEach(client=>{
                                           client.forEach(clientRow=>{
                                               
                                              return(
                                                  
                                                  <tr>
                                                      <td valign="top" key={clientRow.id}  className=''>Gabriel</td>
                                                  </tr>
                                                  
                                              )
                                           })
                                       })
                                   }
                               })
                           })

                        }
                    </tbody>

                </ClientsTable>
                <Link to='/client-register'><button  className='absolute bottom-5 right-[50%] translate-x-[50%] bg-brandOrange-500 text-white  w-[80%] h-[50px] rounded-lg max-w-[800px]'> CADASTRAR</button></Link>
            </section>
            
        </container>
        
    </div>
    </>
  )
}

export default ClientsModal