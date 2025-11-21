import React from 'react';
import Selected from './Selected';

const SelectedPlayers = ({choosePlayers, handleRemove}) => {
    console.log(choosePlayers)
    return (
        
        <div className='max-w-[1000px] mx-auto mt-10'>
            {
                choosePlayers.map(choose=> (
                <Selected 
                    key={choose.id} 
                    handleRemove = {handleRemove}
                    choose={choose}>

                </Selected>))
            }
        </div>
    );
};

export default SelectedPlayers;