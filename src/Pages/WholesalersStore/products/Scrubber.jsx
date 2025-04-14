import React from 'react'
import Category from '../../../Components/Ui/Category'
import { scrubbers } from '../../../Data/Scrubber'

const Scrubber = () => {
  return (
    <div>
      <Category title={"Scrubber"} data={scrubbers} />
    </div>
  )
}

export default Scrubber
