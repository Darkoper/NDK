import React from 'react'
import Category from '../../../Components/Ui/Category'
import { faceTissues } from '../../../Data/facetissue'

const FaceTissue = () => {
  return (
    <div>
      <Category title={"Face tissue"} data={faceTissues} />
    </div>
  )
}

export default FaceTissue
