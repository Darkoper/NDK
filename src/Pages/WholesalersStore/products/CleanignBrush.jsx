import React from 'react'
import Category from '../../../Components/Ui/Category'
import { cleaningBrushes } from '../../../Data/cleaningBrush'

const CleanignBrush = () => {
  return (
    <div>
      <Category title={"Cleaning Brush"}  data={cleaningBrushes}/>
    </div>
  )
}

export default CleanignBrush
