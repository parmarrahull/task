import React from 'react';
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-end bg-black'>
                <div className='py-3 mx-4'>
                    <div className='flex justify-end  gap-7  text-white'>
                        <div className=' bg-gray-500 hover:bg-gray-600 rounded text-center'>
                            <p className=' flex py-4 mx-4 text-xl'><FaHeart /> </p>
                        </div>
                        <div className='bg-gray-500 hover:bg-gray-600 rounded items-center text-xl '>
                            <button className='mx-3 py-3'> View in Editor </button>
                        </div>
                        <div className='bg-green-500 hover:bg-green-400 rounded items-center text-xl'>
                            <button className='mx-3 py-3'> Sign Up </button>
                        </div>
                        <div className='bg-gray-500 hover:bg-gray-600 rounded items-center text-xl'>
                            <button className='mx-3 py-3'> Log In </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
