import React from 'react';
import footerLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#060919] w-full p-10 mt-10'>
            <div className='flex flex-col items-center gap-10'>
                <img src={footerLogo} alt="" className='w-[150px]' />

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 text-center md:text-left justify-between'>

                    <div className='flex flex-col gap-5 mx-auto md:mx-0'>
                        <h2 className='font-bold text-white text-2xl'>About us</h2>
                        <p className='text-gray-600 w-60'>
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 mx-auto md:mx-0'>
                        <h2 className='font-bold text-white text-2xl'>Quick Links</h2>
                        <ul className='text-gray-600 space-y-2'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-5 mx-auto md:mx-0'>
                        <h2 className='font-bold text-white text-2xl'>Subscribe</h2>
                        <p className='text-gray-600 w-60'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex'>
                            <input className='bg-white p-2 w-60 md:w-72 rounded-l-lg' type="text" placeholder='Enter your email'/>
                            <button className="px-6 py-2 rounded-r-lg text-black font-semibold bg-[linear-gradient(135deg,#e88bff,#f5dd79)] shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t-2 border-t-gray-100 w-full pt-5'>
                    <p className='text-gray-600 text-center'>
                        @2024 Your Company All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Footer;