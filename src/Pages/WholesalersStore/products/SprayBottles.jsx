import React from 'react'
import Category from '../../../Components/Ui/Category';
import { sprayBottles } from '../../../Data/sparyBottles';
const SprayBottles = () => {
  return (
    <div>
        <Category title={"Spray Bottles "} data={sprayBottles} />
    </div>
  )
}

export default SprayBottles;
