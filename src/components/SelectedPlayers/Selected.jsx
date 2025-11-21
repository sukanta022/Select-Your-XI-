import React from 'react';
import deleteIcon from '../../assets/delete.png'
const Selected = ({choose, handleRemove}) => {
    
    const removePlayer = () => {
        handleRemove(choose)
    }
    return (
        
        <div className='border-2 m-2 border-gray-300 p-4 flex flex-row justify-between items-center mb-5 gap-4 sm:gap-0'>
            <div className='flex flex-row gap-4 justify-center items-center'>
                <img className='w-[100px] h-[120px] sm:w-[100px] sm:h-[120px] object-cover' src={choose.player_image} alt="" />
                <div>
                    <p className='text-2xl font-bold'>{choose.player_name}</p>
                    <p className='text-xl text-gray-600'>{choose.player_role}</p>
                </div>
            </div>

            <button className="btn w-[50px] h-[50px] p-0 min-h-0 mt-4 sm:mt-0" onClick={removePlayer}>
                <img src={deleteIcon} alt="delete" className="w-[30px] h-[30px]" />
            </button>
        </div>


    );
};

export default Selected;