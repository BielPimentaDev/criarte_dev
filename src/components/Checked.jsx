import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Checked({ id, core_status, cover_status }) {
  const [checkedCore, setCheckedCore] = useState(core_status)
  const [checkedCover, setcheckedCover] = useState(cover_status)


 
  
  useEffect(()=> {
    const checkHandler = async ()=>{
      await axios.put(`https://thayxis.herokuapp.com/api/dev/v1/products/${id}/status`, 
      {cover: checkedCover,
        core: checkedCore}
      )
      console.log(checkedCore, checkedCover)
      console.log(cover_status, core_status)
    }
    checkHandler()
  }  
  , [checkedCore, checkedCover])


 

  return (
    <>
      <label >
        Miolo
        <input
          defaultChecked={checkedCore}
          type="checkbox"
          onClick={()=> setCheckedCore(curr => !curr)}
        ></input>
      </label>
      <label >
        Capa{" "}
        <input
          type="checkbox"
         defaultChecked={checkedCover}
         onClick={()=> setcheckedCover(curr => !curr)}
        ></input>
      </label>
    </>
  );
}
