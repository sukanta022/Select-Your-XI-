import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({allPlayers, availableBalance,setAvailableBalance}) => {
    const allPlayersData = use(allPlayers)
    return (
        <div className='max-w-[1400px] mx-auto mt-10 grid grid-cols-3 gap-10'>
            {
                allPlayersData.map(player => (
                    <PlayerCard 
                        key={player.id}  
                        player={player}
                        setAvailableBalance = {setAvailableBalance}
                        availableBalance={availableBalance} >
                    </PlayerCard>))
            }  
        </div>
    );
};

export default AvailablePlayers;