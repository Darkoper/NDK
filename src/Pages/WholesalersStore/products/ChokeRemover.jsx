import React from 'react'
import Category from '../../../Components/Ui/Category'
import { chokeRemovers } from '../../../Data/ChokeRemover'

const ChokeRemover = () => {
  return (
    <div>
      <Category title={"Choke Remover Nali Pump"} data={chokeRemovers} />
    </div>
  )
}

export default ChokeRemover
