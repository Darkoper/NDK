import React from 'react'
import Category from '../../../Components/Ui/Category'
import { bottleBrushes } from '../../../Data/bottleBrush'

const Foil = () => {
  return (
    <div>
      <Category title={"Bottle Brush"} data={bottleBrushes} />
    </div>
  )
}

export default Foil
