import React from 'react'
import Category from '../../../Components/Ui/Category'
import { kitchenRolls } from '../../../Data/kitchenRolls'

const KitchenRolls = () => {
  return (
    <div>
      <Category title={"Kitchen Rolls"} data={kitchenRolls} />
    </div>
  )
}

export default KitchenRolls
