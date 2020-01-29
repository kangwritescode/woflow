import React from 'react'
import './MenuViewItems.css'
import MenuViewItem from '../MenuViewItem/MenuViewItem'

const MenuViewItems = ({ categoryName, items }) => {
  return (
    <div className={`MenuViewItems`}>
      <header>
        <h2>{categoryName}</h2>
        <label className='MenuViewItems__showing-items'>Showing {items.length} items</label>
      </header>
      {items.map(item => {
        return <MenuViewItem key={item.title} item={item} />
      })}
    </div>
  )
}

export default MenuViewItems
