import React from 'react';
import deleteIcon from '../../assets/delete.png'
const Selected = ({choose, handleRemove}) => {
    
    const removePlayer = () => {
        handleRemove(choose)
    }
    return (
        
        <div className='border-2 border-gray-300 p-4 flex justify-between items-center mb-5'>
                <div className='flex gap-4 items-center'>
                    <img className='w-[100px] h-[120px}' src={choose.player_image} alt="" />
                    <div>
                        <p className='text-2xl font-bold'>{choose.player_name}</p>
                        <p className='text-xl text-gray-600'>{choose.player_role}</p>
                    </div>
                </div>

                <button className="btn w-[50px] h-[50px] p-0 min-h-0" onClick={removePlayer}>
                    <img src={deleteIcon} alt="delete" className="w-[30px] h-[30px]" />
                </button>
                
        </div>
    );
};

export default Selected;