import React from 'react'
import Category from '../../../Components/Ui/Category'
import { jalaBrushes } from '../../../Data/jalaBrushes'

const JalaBrush = () => {
  return (
    <div>
      <Category title={"Jala Brushes"} data={jalaBrushes} />
    </div>
  )
}

export default JalaBrush
