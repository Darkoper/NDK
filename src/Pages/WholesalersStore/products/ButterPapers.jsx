import React from 'react'
import Category from '../../../Components/Ui/Category'
import { butterPapers } from '../../../Data/butterPapers'

const ButterPapers = () => {
  return (
    <div>
      <Category title={"Broom Sticks"} data={butterPapers} />
    </div>
  )
}

export default ButterPapers
