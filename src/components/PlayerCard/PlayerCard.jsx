import React, { useState } from 'react';
import userIcon from '../../assets/user.png'
import flagIcon from '../../assets/report.png'



const PlayerCard = ({player,availableBalance,setAvailableBalance,choosePlayers,setChoosesPlayers}) => {
    
    const [isSelcted, setIsSelected] = useState(false)

    const handlePlayer = (playerData) => {
        if(availableBalance>=playerData.price){
            setAvailableBalance(availableBalance-playerData.price)
            setIsSelected(true)
            setChoosesPlayers(...choosePlayers, playerData)
        }
        else{
            alert("Not enough money")
        }
        
    }


    return (
         <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                    className='rounded-xl w-[400px] h-[230px]'
                    src={player.player_image}
                    alt="Shoes" />
                </figure>
                <div>
                    <div className='flex mt-3'>
                        <img className="h-[20px] w-[20px] mr-2 mt-1" src={userIcon} alt="" />
                        <h2 className="card-title">{player.player_name}</h2>
                    </div>

                    <div className='mt-3 pb-3 flex justify-between items-center border-b-2 border-b-gray-300'>
                        <div className='flex gap-3 items-center'>
                            <img className='opacity-70 h-[20px] w-[20px]' src={flagIcon} alt="" />
                            <p className='text-gray-600'>{player.player_country}</p>
                        </div>
                        <div className='pr-3 pl-3 pt-1 pb-1  bg-gray-200 font-semibold'>
                            <p>{player.player_role}</p>
                        </div> 
                    </div>

                    <div className='mt-3 flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Ratings</p>
                            <p className='text-gray-500'>{player.rating}</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>{player.batting_style}</p>
                            <p className='text-gray-500'>{player.bowling_style}</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Price: <span>{player.price}</span>$</p>
                            <button 
                                className="btn pt-1 pb-2 pl-2 pr-2" 
                                onClick={() => handlePlayer(player)}
                                disabled={isSelcted}>
                                    Choose player
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PlayerCard;