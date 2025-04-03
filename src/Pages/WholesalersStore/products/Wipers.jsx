import React from 'react'
import Category from '../../../Components/Ui/Category';
import { wiper } from '../../../Data/wipers';

const Wipers = () => {
  return (
    <div>
        <Category title={"Wipers"} data={wiper} />

    </div>
  )
}

export default Wipers;

