import React, { useState } from 'react'

const Calhook = () => {
let [success, setSuccess] = useState(0)
const increase = () => {
    setSuccess(success+5)
}
  return (
    <>
    <div className='align-item-center justify-content-center p-8'>
        <h1>
            Count: {success}
        </h1>
        <button className='btn btn-success' onClick={increase}>Add</button>
    </div>
    </>
  )
}

export default Calhook