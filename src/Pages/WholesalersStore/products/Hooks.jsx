import React from 'react'
import Category from '../../../Components/Ui/Category'
import { hooks } from '../../../Data/Hooks'

const Hooks = () => {
  return (
    <div>
      <Category title={"Hooks"} data={hooks} />
    </div>
  )
}

export default Hooks
