import React from 'react'
import Category from '../../../Components/Ui/Category'
import {lofas} from '../../../Data/Loofa'
const Lofa = () => {
  return (
    <div>
      <Category title={"Loofa"} data={lofas} />
    </div>
  )
}

export default Lofa;
