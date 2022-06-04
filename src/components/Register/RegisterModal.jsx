import axios from 'axios';
import { CaretLeft, Users, XCircle } from 'phosphor-react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { Header } from '../Header';
import { RegisterForm } from './RegisterModalStyle';
import {allStates, allStatesInitials} from '../DataConvert'

function RegisterModal() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { dayOfTable, setDayOfTable } = useContext(AppContext)
    const { monthWeekDay, setMonthWeekDay } = useContext(AppContext)

    const url = 'https://thayxis.herokuapp.com/api/v1/products'
    const onSubmit = data => {
        const newDate = (monthWeekDay + '-' + dayOfTable[0])
        axios.post(url,
            {
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
        )
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                if (err.response.data['detail'] == "The day's capacity is full") {
                    alert('Capacidade máxima atingida!')

                }
            })
        reset()
    }

    return (

        <>
            <Header />

            <div className=" bg-fixed flex  justify-center bg-gray-400 bg-opacity-70 w-full h-[100%] absolute top-0 ">

                <container className="bg-white my-auto  h-full w-full  sm:w-[70%] sm:h-[90%] sm:rounded-t-3xl sm:shadow-2xl">
                    <section className="flex justify-between p-5 items-center relative mb-20">


                        <Link to='/clients-table'>
                            <button className='flex items-center text-xl'>
                                <CaretLeft size={40} weight="fill" color='#A1D1FF' />
                                <span className='hidden sm:block'>VOLTAR</span>
                            </button></Link>

                        <span className='flex items-center flex-col  absolute left-[50%] translate-x-[-50%] top-2'>
                            <Users size={60} weight="fill" />
                            <h1 className='font-bold uppercase  text-4xl sm:text-3xl '>

                                Cadastro
                            </h1>
                        </span>


                        <Link to='/' >

                            <XCircle size={40} weight="fill" color='red' />

                        </Link>
                    </section>

                    <RegisterForm onSubmit={handleSubmit(onSubmit)}>

                    <section className='rowSection'>
                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name='clientName' {...register('clientName')}></input>
                                <label className='inputLabel'> Cliente:</label>

                            </div>
                       
                            <div className='inputContainer'>
                                <input type="text" placeholder=' ' className='inputForm' name='productName' {...register('productName')}></input>
                                <label className='inputLabel'> Produto:</label>

                            </div>
                        </section>

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
                            <div className='inputContainer'>
                                <select type="text" placeholder=' ' className='inputForm' name='stateName' {...register('stateName')}>
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
                        <section className='rowSection'>
                            <div className='inputContainer'>

                                <input type="text" placeholder=' ' className='inputForm' name='priceName' {...register('priceName')}></input>

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
                                <textarea type="text" placeholder= 'Observações...' rows='4' colw='40'  className='textAreaINput' name='observationsName' {...register('observationsName')}></textarea>
                                

                            </div>
                        </section>



                        <button type='submit' className='bg-brandOrange-500   text-white sm:h-10'> CADASTRAR</button>
                    </RegisterForm>

                </container>

            </div>
        </>

    );
}

export default RegisterModal;

