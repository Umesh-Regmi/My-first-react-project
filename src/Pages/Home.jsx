import React, {useEffect, useState } from 'react'

//import Hero from '../Component/Hero'

const Home = () => {
let[success, setSuccess] = useState([])
useEffect(()=>{
  fetch(`http://localhost:5000/category/getallcategories`)
  .then(response=>response.json())
  .then(data=>setSuccess(data))
  .catch(error=>console.log(error))
},[])

  return (
    <>
   <h1 className=' text-2xl text-center mt-3 text-decoration-underline '>Departments</h1>
   {
    success.map(product=>{
      return <div>{product.category_name}</div>
    })
   }



      
    </>
  )
}

export default Home