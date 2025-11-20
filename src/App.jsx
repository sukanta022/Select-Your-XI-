import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'



// const allPlayersPromise = fetch('/players.json').then(res => res.json())
const allPlayersPromise = async () => {
  const data = await fetch('/players.json')
  return data.json();
}

function App() {
  const allPlayers = allPlayersPromise()

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
          <AvailablePlayers allPlayers={allPlayers}></AvailablePlayers>
        </Suspense>
      </div>
      
    </>
  )
}

export default App
