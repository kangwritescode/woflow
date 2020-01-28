import React from 'react'
import './MenuViewItems.css'
import MenuViewItem from '../MenuViewItem/MenuViewItem'

const MenuViewItems = ({ categoryName, items }) => {
  return (
    <div className={`MenuViewItems`}>
      <header>
        <h3>{categoryName}</h3>
        <label>Showing {items.length} items</label>
      </header>
      {items.map(item => {
        return <MenuViewItem key={item.title} item={item} />
      })}
    </div>
  )
}

export default MenuViewItems
