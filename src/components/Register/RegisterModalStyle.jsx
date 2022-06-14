import styled from 'styled-components'


export const RegisterForm = styled.form`
        
        
        height: 80%;
        
        

        width: 90%;
        max-width: 500px;
        margin: 50px auto;                
        display: flex;
        flex-direction: column;
        padding: 15px;
        
        gap: 50px;

        .colSection{
            display:flex;
            flex-direction: column;
            gap:30px;
        }
        .rowSection{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            gap:30px;
        }

        .textAreaINput{
            background-color:#F9F9F9;
            box-shadow: 0px 4px 4px 0px #00000040 inset;
            
            border-radius: 5px;
            padding: 10px
        }
        

        .textAreaContainer{
            position:relative;
            display:flex;
            justify-content: center;
            
           
        }
        

        .inputContainer{
            position:relative;
            display:flex;
            gap: 5px;
        }


        .inputLabel{
            position:absolute;
            font-weight: 700;
            left:10px;
            bottom:4px;
            font-size:1rem;
            transition: all 0.3s ease;
            
            
            

        }

        .inputForm[type="text"]{
            background-color:#F9F9F9;
            box-shadow: 0px 4px 4px 0px #00000040 inset;
            
            

        }
       

        .inputForm:focus ~ .inputLabel, .inputForm:not(:placeholder-shown).inputForm:not(:focus) ~ .inputLabel{
            color:var(--orange);
            transform: translateY(-150%);
            font-size: 1rem;
            font-weight: 700;
        }

        .inputContainer input:focus  {
        box-shadow: 0px 0px 11px 5px #FC8763;
        border: 1px solid var(--orange);

        }

        

        .inputContainer input{
            transition: all 0.3s ease; 
            width:100%;
            
            border-radius:8px;
            padding:3px;
            font-family: inherit;
            font-size: inherit;
            
        }
        .inputContainer input[type=text]{
            padding-left:10px;
        }


    

        @media(max-width:600px){
           width:90%;
           .rowSection{
            flex-direction:column;
           }
        }

`
export const PlusButton = styled.div`
        transition: all 0.3s
        width:50px;
        margin: auto;
        cursor: ${props=> props.fullClient ? 'pointer' : '' };
        
            
            
`