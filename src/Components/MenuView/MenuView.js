import React from 'react'
import './MenuView.css'
import MenuViewHeader from '../MenuViewHeader/MenuViewHeader'
import MenuViewItems from '../MenuViewItems/MenuViewItems'

const MenuView = ({ restaurantData }) => {
  const restaurantName = restaurantData.name
  const store = restaurantData.storeGroups[0].stores[0]
  const restaurantAddress = store.address
  const categoryName =
    store.menus[0].campaignMenuAudits[0].items[0].categories.title
  const items = store.menus[0].campaignMenuAudits[0].items

  return (
    <React.Fragment>
      <MenuViewHeader
        restaurantName={restaurantName}
        restaurantAddress={restaurantAddress}
      />
      <MenuViewItems categoryName={categoryName} items={items} />
    </React.Fragment>
  )
}

export default MenuView
