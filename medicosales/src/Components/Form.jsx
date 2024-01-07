import React from 'react'
import Formdata from './Formdata'


function Form() {
    return (
    <>
           <div className='absolute pt-24 pl-72 text-2xl'>
           Sales Information
           </div>
            <div className=" absolute pl-72 pt-36 columns-4">
                <div className="text-wrap text-base">
                    <Formdata label="Customer" placeholder="Enter Customer Name" />
                    <Formdata label="Invoice ID" placeholder="Enter Invoice ID" />
                    <Formdata label="Start Date" placeholder="Start Date" />
                    <Formdata label="End Date" placeholder="End Date" />
                </div>
               
              
            
        </div>
      
    </>
    )
}

export default Form