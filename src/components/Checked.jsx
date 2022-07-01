import axios from "axios";
import React, { useState } from "react";

export default function Checked({ id, core_status, cover_status }) {
  const [checkedCore, setCheckedCore] = useState(core_status);
  const [checkedCover, setCheckedCover] = useState(cover_status);

  function checkCore() {
    const core = !checkedCore;
    setCheckedCore(core);
    axios.put(`https://thayxis.herokuapp.com/api/v1/products/${id}/status`, {
      cover: checkedCover,
      core: core,
    });
  }

  function checkCover() {
    const cover = !checkedCover;
    setCheckedCover(cover);
    axios.put(`https://thayxis.herokuapp.com/api/v1/products/${id}/status`, {
      cover: cover,
      core: checkedCore,
    });
  }

  return (
    <>
      <label className={checkedCore ? "line-through" : ""}>
        Miolo{" "}
        <input
          type="checkbox"
          onClick={checkCore}
          checked={checkedCore}
        ></input>
      </label>
      <label className={checkedCover ? "line-through" : ""}>
        Capa{" "}
        <input
          type="checkbox"
          onClick={checkCover}
          checked={checkedCover}
        ></input>
      </label>
    </>
  );
}
