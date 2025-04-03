import React from 'react';
import Category from '../../../Components/Ui/Category';
import { ropes } from '../../../Data/ropes';

const Ropes = () => {
  return (
    <div>
      <Category title={"Ropes"} data={ropes} />
    </div>
  );
};

export default Ropes;
