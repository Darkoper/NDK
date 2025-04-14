import React from 'react'
import Category from '../../../Components/Ui/Category'
import { broomSticks } from '../../../Data/broomSticks'

const Foil = () => {
  return (
    <div>
      <Category title={"Broom Sticks"} data={broomSticks} />
    </div>
  )
}

export default Foil
