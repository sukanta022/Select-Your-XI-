import React from 'react';
import navLogo from '../../assets/logo.png'
import coin from '../../assets/dollar.png'
const Navbar = ({availableBalance}) => {
    return (
        
            <div className="navbar max-w-[1400px] mx-auto mb-5 mt-5">
            
                <div className="flex-1">
                    <img className='w-[70px] h-[70px]' src={navLogo} alt="" />
                </div>
                <div className="flex items-center">
                    <span className='mr-2 text-xl font-extrabold'>{availableBalance}</span>
                    <span className='mr-2 text-xl font-extrabold'>Coins</span>
                    <img className='w-[20px] h-[20px]' src={coin} alt="" />
                </div>
            </div>
        
    );
};

export default Navbar;