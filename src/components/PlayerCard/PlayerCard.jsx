import React, { useState } from 'react';
import userIcon from '../../assets/user.png'
import flagIcon from '../../assets/report.png'
import { toast } from 'react-toastify';



const PlayerCard = ({player,availableBalance,setAvailableBalance,choosePlayers,setChoosesPlayers}) => {
    
    const [isSelcted, setIsSelected] = useState(false)

    const handlePlayer = () => {
        if(availableBalance>=player.price && choosePlayers.length<6){
            setAvailableBalance(availableBalance-player.price)
            setIsSelected(true)
            setChoosesPlayers([...choosePlayers, player]);
            toast("Player added")
        }
        else{
            if (choosePlayers.length === 6) {
            toast("Player limit exceeded!");
        } else {
            toast("Not enough money");
        }
        }
        
    }


    return (
         <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-sm p-4">
            <figure>
                <img
                className="rounded-xl w-full h-[200px] sm:h-[230px] object-cover"
                src={player.player_image}
                alt="" />
            </figure>

            <div>
                <div className="flex mt-3">
                    <img className="h-[20px] w-[20px] mr-2 mt-1" src={userIcon} alt="" />
                    <h2 className="card-title text-[18px] sm:text-[20px]">{player.player_name}</h2>
                </div>

                <div className="mt-3 pb-3 flex justify-between items-center border-b-2 border-b-gray-300">
                    <div className="flex gap-3 items-center">
                        <img className="opacity-70 h-[20px] w-[20px]" src={flagIcon} alt="" />
                        <p className="text-gray-600">{player.player_country}</p>
                    </div>
                    <div className="px-3 py-1 bg-gray-200 font-semibold text-sm sm:text-base">
                        <p>{player.player_role}</p>
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Ratings</p>
                        <p className="font-bold">{player.rating}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="font-bold">{player.batting_style}</p>
                        <p className="text-gray-500">{player.bowling_style}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="font-bold">Price: <span>{player.price}</span>$</p>
                        <button 
                            className="btn px-3 py-2"
                            onClick={handlePlayer}
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