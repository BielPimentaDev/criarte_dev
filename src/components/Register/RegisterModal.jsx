import { RegisterForm } from './RegisterModalStyle';
import {XCircle, Users, CaretLeft} from 'phosphor-react'
import {Link} from 'react-router-dom'
import{Header} from'../Header'

function RegisterModal() {
    return ( 
        <>
        <Header/>
        
        <div className=" bg-fixed flex  justify-center bg-gray-400 bg-opacity-70 w-full h-[100%] absolute top-0 ">
            
            <container className="bg-white my-auto  h-full w-full  sm:w-[70%] sm:h-[90%] sm:rounded-t-3xl sm:shadow-2xl">
                <section className="flex justify-between p-5 items-center relative mb-20">
                   

                    <Link to='/clients-table'>
                    <button className='flex items-center text-xl'>
                    <CaretLeft size={40} weight="fill" color='#A1D1FF'/>
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

                <RegisterForm>

                    <section>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Cliente:</label>
                            
                        </div>
                    </section>
                    <section>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Produto:</label>
                            
                        </div>
                    </section>
                    <section>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Nome impresso:</label>
                            
                        </div>
                    </section>
                    <section>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Tema:</label>
                            
                        </div>
                    </section>

                    <section className='rowSection'>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Sexo::</label>
                            
                        </div>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Estado:</label>
                            
                        </div>
                       
                    </section>
                    <section>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Endereço:</label>
                            
                        </div>
                    </section>
                    <section className='rowSection'>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Preço:</label>
                            
                        </div>
                        <div className='inputContainer'>                            
                            <input type="text" placeholder=' ' className='inputForm'></input>
                            <label className='inputLabel'> Pagamento:</label>
                            
                        </div>
                       
                    </section>

                  
                    
                </RegisterForm>
                    <Link to='/client-register'><button  className='mt-5 bg-brandOrange-500 text-white px-10  w-full text-2xl sm:rounded-lg  sm:mt-[-60px] sm:w-[full] h-[80px] '> CADASTRAR</button></Link>
                
            </container>

             </div>
             </>
            
     );
}

export default RegisterModal;