import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({allPlayers}) => {
    const allPlayersData = use(allPlayers)
    return (
        <div className='max-w-[1400px] mx-auto mt-10 grid grid-cols-3 gap-10'>


            {
                allPlayersData.map(player => (<PlayerCard key={player.id}  player={player}></PlayerCard>))
            }

            
        </div>
    );
};

export default AvailablePlayers;