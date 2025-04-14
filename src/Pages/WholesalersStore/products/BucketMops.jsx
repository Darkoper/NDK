import React from 'react'
import Category from '../../../Components/Ui/Category'
import { bucketMops } from '../../../Data/bucketMops'

const BucketMops = () => {
  return (
    <div>
      <Category title={"Bucket Mops"} data={bucketMops} />
    </div>
  )
}

export default BucketMops;
