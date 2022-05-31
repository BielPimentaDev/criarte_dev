import React, {useState} from 'react'
import axios from 'axios'

export default function Checked({id,core_status, cover_status}) {
    
    const [checkedCore, setCheckedCore] = useState(core_status)


   

     function checkCore(){
        
        setCheckedCore(!checkedCore)
        
        
        
        
        
        
        axios.put(`https://thayxis.herokuapp.com/api/v1/products/${id}/status`,{
            "cover": false,
            "core" :checkedCore
        })
        
    }

   



  return (
      <>
      
      
    <label>Miolo <input type="checkbox" onClick={checkCore}  defaultValue={core_status} ></input></label>
    
      </>
  )
}
