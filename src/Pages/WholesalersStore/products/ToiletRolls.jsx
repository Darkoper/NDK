import React from 'react'
import Category from '../../../Components/Ui/Category'
import { toiletRolls } from '../../../Data/toiletRolls'

const ToiletRolls = () => {
  return (
    <div>
      <Category title={"Toilet Rolls"}  data={toiletRolls}/>
    </div>
  )
}

export default ToiletRolls
