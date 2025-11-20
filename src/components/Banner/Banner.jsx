import React from 'react';
import bannerLogo from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#09203f_0%,#537895_100%)] max-w-[1400px] h-[500px] mx-auto flex justify-center items-center' >
            <div className='flex flex-col items-center gap-3'>
                <img className='h-[200px] w-[250px]' src={bannerLogo} alt="" />
                <h2 className='font-semibold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-white/70 text-2xl'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-warning bg-[#E7FE29] rounded-xl border-2 border-black/50">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;