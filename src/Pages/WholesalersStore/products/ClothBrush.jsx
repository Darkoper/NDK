import React from 'react'
import Category from '../../../Components/Ui/Category'
import { clothBrushes } from '../../../Data/clothBrush'

const ClothBrush = () => {
  return (
    <div>
      <Category title={"Cloth Brush"} data={clothBrushes} />
    </div>
  )
}

export default ClothBrush
