import React from 'react'
import './MenuViewHeader.css'

const MenuViewHeader = ({ restaurantName, restaurantAddress }) => {
  return (
    <header className='MenuViewHeader'>
      <label>
        <strong>{restaurantName}</strong>
      </label>
      <br />
      <label>{restaurantAddress}</label>
      <div className='MenuViewHeader__img-placeholder'></div>
    </header>
  )
}

export default MenuViewHeader
