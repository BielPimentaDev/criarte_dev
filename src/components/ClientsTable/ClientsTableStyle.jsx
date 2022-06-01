import styled from 'styled-components'

export const ClientsTable = styled.table`
           width:90%;
           margin: 0 auto;
           text-align: center;
           border-collapse: separate;
           border-spacing: 0 15px;
            
           thead{
            background-color: white;
            box-shadow: 3px 8px 4px 0px #00000040;
            
           }

           thead tr{
               padding: 10px;
               font-size: 1.5rem
           }
           thead th{
               padding:8px;
           }

           tbody tr{
               
               cursor:pointer;
               background-color: #E6E6E6;
               font-weight: 400;
               transition: max-height 0.5s ease;
               
               

           }
           tbody tr:hover  div{
               max-height:100px;
               opacity: 1;
           }

           tbody tr td{
               position: relative;
                padding: 15px 0;
                
                
               
           }
           
           tbody tr div{
               opacity:0;
                display:flex;
                flex-direction:column;
                transition: all 0.5s ease;
                transition-delay: 250ms;
                max-height:0;
               
               
           }
           tbody tr div p{
               max-width:100px;
               margin:auto
               
           }
           

           @media (max-width:600px){
            
            width:100%;

            thead tr{
                font-size: 1.25rem;
            }
            tbody td:nth-child(odd){
                background-color:#DDDADA;
            }
           }


           
           
`
