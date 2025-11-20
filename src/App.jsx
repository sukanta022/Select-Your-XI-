import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'



// const allPlayersPromise = fetch('/players.json').then(res => res.json())
const allPlayersPromise = async () => {
  const data = await fetch('/players.json')
  return data.json();
}

function App() {
  const allPlayers = allPlayersPromise()
  const[toggle, setToggle] = useState(false)
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className='max-w-[1400px] mx-auto mt-10 flex justify-between items-center'>
          <p className='text-2xl font-bold'>{toggle?"Available Players":"Selected Players"}</p>
          <div className='flex '>
            <button className={`btn rounded-l-xl border-r-0 ${toggle && "bg-[#E7FE29]"}`} onClick={()=> setToggle(true)}>Available</button>
            <button className={`btn rounded-r-xl border-l-0 ${toggle || "bg-[#E7FE29]"}`} onClick={()=> setToggle(false)}>Selected (<span>0</span>)</button>
          </div>
        </div>
        {
          toggle ? <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
          <AvailablePlayers allPlayers={allPlayers}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
        }
        
        
      </div>
      
    </>
  )
}

export default App
