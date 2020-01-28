import React from 'react'
import DATA from './data/data'
import './App.css'
import MenuView from './Components/MenuView/MenuView'

function App () {
  const restaurantData = DATA[0].brands[0]
  
  return (
    <div className='App'>
      <MenuView restaurantData={restaurantData} />
    </div>
  )
}

export default App
