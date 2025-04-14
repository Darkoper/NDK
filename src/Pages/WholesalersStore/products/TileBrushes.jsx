import React from 'react'
import Category from '../../../Components/Ui/Category'
import { tileBrushes } from '../../../Data/tileBrushes'

const TileBrushes = () => {
  return (
    <div>
      <Category title={"Tile Brushes "} data={tileBrushes} />
    </div>
  )
}

export default TileBrushes
