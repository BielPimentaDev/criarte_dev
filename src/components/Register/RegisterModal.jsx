import axios from 'axios';
import { CaretLeft, Users, XCircle, PlusCircle } from 'phosphor-react';
import { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { Header } from '../Header';
import { RegisterForm, PlusButton } from './RegisterModalStyle';
import {allStates, allStatesInitials, productsList} from '../DataConvert'
import './Style.css'

function RegisterModal() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { clients, setClients } = useContext(AppContext)
    const { dayOfTable, setDayOfTable } = useContext(AppContext)
    const { monthWeekDay, setMonthWeekDay } = useContext(AppContext)

    let navigate = useNavigate()
   
    

    const [products, setProducts] = useState([])
    const [clientCount, setClientCount] = useState(clients.length)
    

    const url = 'https://thayxis.herokuapp.com/api/dev/v1/products'

    const onSubmit = data => {
             let registerFailed = false
             console.log(data)

            const newDate = (monthWeekDay + '-' + dayOfTable[0])
            const dataRegister =  {
                "type": data.productName,
                "printed_name": data.printedName,
                "theme": data.themeName,
                "price": data.priceName,
                "sex": data.sexName,
                "payment": data.payName,
                "observations" : data.observationsName,
                "day": newDate,
                "client": {
                    "name": data.clientName,
                    "address": data.addressName,
                    "state": data.stateName
                }
            }
    
            axios.post(url,
               dataRegister
            )
                .then(res => {
                    console.log(res)
                    
                }
                    
                    )
                .catch(err => {
                    let registerFailed = true
                    console.log(err)
                    if (err.response.data['detail'] == "The day's capacity is full") {
                        alert('Capacidade máxima atingida!')}
                    else (alert('Cadastro nao realizado! Tentar novamente'))
    
                    
                })
            
        
            
            products?.map(

                product=>{
                    const newDate = (monthWeekDay + '-' + dayOfTable[0])
                    const productName = 'productName_' + product
                    const printedName = 'printedName_' + product
                    const themeName = 'themeName_' + product
                    const priceName = 'priceName_' + product
                    const sexName = 'sexName_' + product
                    const payName = 'payName_' + product
                    const observationsName = 'observationsName_' + product
                    
                    const dataRegister =  {
                        "type":data[productName],
                        "printed_name": data[printedName] ,
                        "theme": data[themeName],
                        "price": data[priceName],
                        "payment":  data[payName],
                        "observations" :  data[observationsName],
                        "sex": data[sexName],
                        "day": newDate,
                        "client": {
                            "name": data.clientName,
                            "address": data.addressName,
                            "state": data.stateName
                        }
                }
                
                
                
                axios.post(url,
                    dataRegister
                 )
                     .then(res => console.log(res))
                     .catch(err => {
                         console.log(err)
                         if (err.response.data['detail'] == "The day's capacity is full") {
                             alert('Capacidade máxima atingida!')}
                         else {
                            let registerFailed = true
                         }
         
                         
                     })
            
                    
                
                }
                )

           
    reset()
    registerFailed ? alert('Cadastro nao realizado! Tentar novamente') : alert('Cadastro realizado com sucesso!')
    }





    const iterateProduct = () =>{
        setProducts([...products, clientCount])
        setClientCount(clientCount +1) 
    }
  const isClientFull =  clientCount < 9 ? true : false 
  function deleteProduct(index){
        products.pop()
        navigate('/client-register')
        setClientCount(clientCount - 1 )
  }
    return (

        <>
            <Header />

            
                <div className='opacityDiv'>

                
                <div className="formContainer">
                    <section className="topSectionForm">


                        <Link to='/clients-table'>
                            <button className='backButton'>
                                <CaretLeft size={40} weight="fill" color='#A1D1FF' />
                                
                            </button></Link>

                        <span>
                            
                            <div className = 'flex flex-col items-center gap-3'>
                                <h1>Cadastro
                            </h1>
                            <div  className='bg-brandBlue-500 text-white rounded-lg w-[50px]  text-center text-2xl '>{clientCount + 1 }</div>
                            </div>
                        </span>


                        <Link to='/' >

                            <XCircle size={40} weight="fill" color='red' />

                        </Link>
                    </section>


                    <div >
                        
                   
                    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
                        
                    
                        <section className='rowSection'>
                                <div className='inputContainer'>
                                    <input type="text" placeholder=' ' className='inputForm' name='clientName' {...register('clientName')}></input>
                                    <label className='inputLabel'> Cliente:</label>
                                </div>
                                <div className='inputContainer'>
                                    <select  placeholder=' ' className='inputForm' name='stateName' {...register('stateName')}>
                                        <option value="" selected disabled >Selecione um Estado</option>
                                        {
                                            allStatesInitials.map(
                                                state => {return (<option value={state} key={state}  >{state}</option>)}
                                            )
                                        }
                                    </select>
                        
                                </div>
                        
                        
                            </section>
                            <section>
                                <div className='inputContainer'>
                                    <input type="text" placeholder=' ' className='inputForm' name='addressName' {...register('addressName')}></input>
                                    <label className='inputLabel'> Endereço:</label>
                                </div>
                            </section>

                            
                        
                    
                        <hr/>
                        

                        <section className='rowSection'>
                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name='printedName' {...register('printedName')}></input>
                                <label for='inputForm' className='inputLabel'> Nome impresso:</label>

                            </div>
                        
                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name='themeName' {...register('themeName')}></input>
                                <label className='inputLabel'> Tema:</label>

                            </div>
                        </section>

                        
                        <section className='rowSection'>
                                <div className='inputContainer'>
                                    <select name='sexName' className='inputForm' {...register('sexName')}>
                                        <option value='male'>Masculino</option>
                                        <option value='female' selected>Feminino</option>
                                    </select>
                                </div>
                        
                                <select type="text" placeholder=' ' className='inputForm' name='productName' {...register('productName')}>
                                    <option value= '' disabled selected >- Produto</option>
                                    {productsList.map(product=>{
                                        return <option value={product} key={product}>{product}</option>
                                    })}
                                </select>
                                    </section>
                               

                            

                        <section className='rowSection'>
                            <div className='inputContainer'>

                                <input type="number" step= 'any' placeholder=' ' className='inputForm' name='priceName' {...register('priceName')}></input>

                                <label className='inputLabel'> Preço:</label>

                            </div>
                            <div className='inputContainer'>


                                <select name='payName' className='inputForm' {...register('payName')}>
                                    <option value='pix'>PIX</option>
                                    <option value='boleto'>Boleto</option>
                                    <option value='cartao'>Cartão</option>
                                </select>
                            </div>
                        </section>                     
                               
                        <section>
                                <div className='textAreaContainer'>
                                    
                                    <textarea type="text" placeholder= 'Detalhes do pedido...' rows="4" cols="50"  className='textAreaINput' name='observationsName' {...register('observationsName')}></textarea>
                                    
    
                                </div>
                        </section>   

                        {products.map(product=>{
                            
                            
                            return (
                                <>
                                <hr/>
                                <div  className='cursor-pointer' onClick  = {() => deleteProduct(0)}> <XCircle size={25} weight="fill" color= {'#FF8080'} /> </div>
                                
                                <section className='rowSection'>
                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name={`printedName_${product}`} {...register(`printedName_${product}`)}></input>
                                <label for='inputForm' className='inputLabel'> Nome impresso:</label>

                            </div>
                        
                            

                                
                        

                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name={`themeName_${product}`} {...register(`themeName_${product}`)}></input>
                                <label className='inputLabel'> Tema:</label>

                            </div>
                            
                        </section>

                                 <div className="rowSection">
                                     <select type="text" placeholder=' ' className='inputForm' name={`productName_${product}`} {...register(`productName_${product}`)}>
                                        <option value= '' disabled selected >- - Selecione um produto</option>
                                        {productsList.map(product=>{
                                            return <option value={product} key={product}>{product}</option>
                                        })}
                                                                     </select>
                                                                     <div className='inputContainer'>
                                        <select name={`sexName_${product}`} className='inputForm' {...register(`sexName_${product}`)}>
                                            <option value='male'>Masculino</option>
                                            <option value='female' selected>Feminino</option>
                                        </select>
                                                                     </div>
                                 </div>

                                <section className='rowSection'>
                                <div className='inputContainer'>
    
                                    <input type="number" step= 'any' placeholder=' ' className='inputForm' name={`priceName_${product}`} {...register(`priceName_${product}`)}></input>
    
                                    <label className='inputLabel'> Preço:</label>
    
                                </div>
                                <div className='inputContainer'>
    
    
                                    <select name={`payName_${product}`} className='inputForm' {...register(`payName_${product}`)}>
                                        <option value='pix'>PIX</option>
                                        <option value='boleto'>Boleto</option>
                                        <option value='cartao'>Cartão</option>
                                    </select>
                                </div>
                            </section>                     
                                   
                            <section>
                                    <div className='textAreaContainer'>
                                        
                                        <textarea type="text" placeholder= 'Detalhes do pedido...' rows="4" cols="50"  className='textAreaINput' name={`observationsName_${product}`} {...register(`observationsName_${product}`)}></textarea>
                                        
        
                                    </div>
                            </section>  
                            </>)
                        })}

                       <PlusButton fullClient = {isClientFull} onClick={ isClientFull && iterateProduct} className='plusButton'> <PlusCircle size={50} weight="fill" color={isClientFull ? '#FC8763' : 'gray'} /> </PlusButton>

                        <button type='submit' className='formButton bg-brandOrange-500   text-white sm:h-10'> CADASTRAR</button>
                    </RegisterForm>
                    </div>

                </div>
                </div>

            
        </>

    );
}

export default RegisterModal;

