import React from 'react'
import Category from '../../../Components/Ui/Category'
import { clipHangers } from '../../../Data/clipHanger'

const Cliphangers = () => {
  return (
    <div>
      <Category title={"Clip Hangers"} data={clipHangers}/>
    </div>
  )
}

export default Cliphangers
