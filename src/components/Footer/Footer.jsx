import React from 'react';
import footerLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#060919] w-full p-10 mt-10'>
            <div className='flex flex-col justify-center items-center gap-15'>
                <img src={footerLogo} alt="" />
                <div className='flex justify-between  gap-50'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-bold text-white text-2xl'>About us</h2>
                        <p className='text-gray-600 w-60'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h2 className='font-bold text-white text-2xl'>Quick Links</h2>
                        <ul className='text-gray-600'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h2 className='font-bold text-white text-2xl'>Subscribe</h2>
                        <p className='text-gray-600 w-50'>Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className='bg-white p-2 w-80 rounded-l-lg' type="text" placeholder='Enter your email'/>
                            <button class="px-6 py-2 rounded-r-lg text-black font-semibold 
                                bg-[linear-gradient(135deg,#e88bff,#f5dd79)] shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t-2 border-t-gray-100 w-full'>
                    <p className='text-gray-600 text-center mt-5'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;