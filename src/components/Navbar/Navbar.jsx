import React from 'react';
import navLogo from '../../assets/logo.png'
import coin from '../../assets/dollar.png'
const Navbar = () => {
    return (
        
            <div className="navbar max-w-[1400px] mx-auto mb-10">
            
                <div className="flex-1">
                    <img className='w-[70px] h-[70px]' src={navLogo} alt="" />
                </div>
                <div className="flex items-center">
                    <span className='mr-2'>60000000</span>
                    <span className='mr-2'>Coins</span>
                    <img className='w-[20px] h-[20px]' src={coin} alt="" />
                </div>
            </div>
        
    );
};

export default Navbar;