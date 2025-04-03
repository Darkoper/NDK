import React from 'react';
import Category from '../../../Components/Ui/Category';
import { mops } from '../../../Data/mop';

const Mop = () => {
  return (
    <div>
      <Category title={"Mops"} data={mops} />
    </div>
  );
};

export default Mop;