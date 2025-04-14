import React from 'react'
import Category from '../../../Components/Ui/Category'
import { napkins } from '../../../Data/napkins'

const Napkins = () => {
  return (
    <div>
      <Category title={"Napkins"} data={napkins} />
    </div>
  )
}

export default Napkins
