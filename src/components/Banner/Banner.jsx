import React from 'react';
import bannerLogo from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#09203f_0%,#537895_100%)] w-full h-[350px] md:h-[450px] lg:h-[500px] flex justify-center items-center px-4'>
            <div className='flex flex-col items-center gap-3 text-center max-w-[90%] md:max-w-[700px]'>
                <img className='h-[120px] w-[150px] md:h-[180px] md:w-[220px] lg:h-[200px] lg:w-[250px]' src={bannerLogo} alt="" />
                <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-white'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>
                <p className='text-white/70 text-lg md:text-xl lg:text-2xl'>
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="btn btn-warning bg-[#E7FE29] rounded-xl border-2 border-black/50 px-6 py-2 text-sm md:text-base">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;
