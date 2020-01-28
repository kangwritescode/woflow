import React from 'react'
import './MenuViewItem.css'

const MenuViewItem = ({ item: { description, title, price } }) => {


  function toPriceString (amount) {
    let splitAmount = amount.toString().split('')
    splitAmount.splice(splitAmount.length - 2, 0, '.')
    return splitAmount.join('')
  }

  return (
    <div className='MenuViewItem'>
      <label className={`MenuViewItem__title`}>
        <strong>{title}</strong>
      </label>
      <br />
      <label className={`MenuViewItem__description`}>{description}</label>
      <br />
      <label className={`MenuViewItem__price`}>{toPriceString(price)}</label>
    </div>
  )
}

export default MenuViewItem
