import React from 'react'

function Formdata(props) {
  return (
   
    <div >
        <label
            className="form-label mb-3 ms-1 input-label">{props.label}</label>
        <input className=" border py-3  pl-3 text-sm inp-placeholder"
           placeholder={props.placeholder} />
    </div>

  )
}

export default Formdata


