import React from 'react'
import Category from '../../../Components/Ui/Category'
import { footScrubbers } from '../../../Data/footScrubber'

const Footscrubber = () => {
  return (
    <div>
      <Category title={"Foot Scrubber"} data={footScrubbers} />
    </div>
  )
}

export default Footscrubber
