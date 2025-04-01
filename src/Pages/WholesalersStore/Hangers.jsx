import React from 'react'
import Category from '../../Components/Ui/Category';
import { hangers } from '../../Data/hangers';

const Hangers = () => {
  return (
    <div>
        <Category title={"Hangers"} data={hangers} />
    </div>
  )
}

export default Hangers;
