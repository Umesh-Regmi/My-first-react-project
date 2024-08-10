import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='bg-sky-200 p-10'>
      <div className='bg-teal-100 w-3/4 m-auto flex p-11'> 
        <div className='w-50'>
          <h1 className='text-3xl font-bold underline text-purple-800'>Address</h1>
          <h2 className='text-2xl font-bold  text-purple-800'>Our Store</h2>
          <h3 className='text-2xl font-bold  text-purple-800'>Koteshwor, Balkumari</h3>
          <h4 className='text-xl'>Phone: 01-3456754</h4>
          <h4 className='text-xl'>Email: Ourstore74@gmail.com</h4>
          <h4 className='text-xl'>Website: www.Ourstore.com</h4>
          </div>
        <div className='w-50'>
          <h1 className='text-3xl font-bold underline text-purple-800 text-center'>Contact Form</h1>
          <input type="email" className='full mt-1 w-full rounded-md ps-2 outline-none py-2' placeholder='Enter your email'/>
          <input type="text" className='full mt-1 w-full rounded-md ps-2 outline-none py-2' placeholder='Subject'/>
          <textarea type="text" className='full mt-1 w-full rounded-md ps-2 outline-none py-2 px-2 resize-none h-36' placeholder='Body'/>
          <button className='bg-sky-500 mt-1 py-1 w-full rounded-md hover:bg-red-500 active:bg-red-600'>Submit</button>
          </div>
      </div>
      <div className='3/4 p-14 bg-sky-300'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403353674!2d85.31233177525384!3d27.709862776181115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1722920202904!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}

export default Contact