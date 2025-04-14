import React from 'react'
import Category from '../../../Components/Ui/Category'
import { clothClips } from '../../../Data/clothClip'

const ClothClip = () => {
  return (
    <div>
      <Category title={"Cloth Clips"} data={clothClips} />
    </div>
  )
}

export default ClothClip
