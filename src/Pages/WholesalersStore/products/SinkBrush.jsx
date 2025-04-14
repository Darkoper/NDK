import React from 'react'
import Category from '../../../Components/Ui/Category'
import { sinkBrushes } from '../../../Data/sinkBrush'

const SinkBrush = () => {
  return (
    <div>
      <Category title={"Sink Brush"} data={sinkBrushes} />
    </div>
  )
}

export default SinkBrush
