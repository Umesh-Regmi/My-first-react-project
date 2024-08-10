import React from 'react'

const Header = () => {
    return (
        <>
            <div className="grid w-screen grid-cols-1 bg-slate-800 py-3 text-white sm:grid-cols-4 md:grid-cols-5">
                <div className="text-center text-3xl">Our Store</div>
                <div className="flex px-3 sm:col-span-2 md:col-span-3">
                    <input type="search" className="w-full rounded-s-xl px-3 py-1 text-purple-800 outline-none" />
                    <button className="rounded-e-xl bg-orange-300 px-3">Search</button>
                </div>
                <div className="flex justify-evenly">
                    <a href=""><i className="text-3xl bi bi-box-arrow-in-left"></i></a>
                    <a href=""><i className='text-3xl bi bi-person-plus'></i></a>
                    <a href=""><i className='text-3xl bi bi-cart'></i></a>
                </div>
            </div>

            <div className='bg-slate-800'>
                <ul className='list-unstyled text-white text-xl md:flex md:justify-evenly text-center'>
                    <li><a href="">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

        </>
    )
}

export default Header