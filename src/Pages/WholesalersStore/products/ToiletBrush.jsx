import React from 'react';
import Category from '../../../Components/Ui/Category';
import { toiletBrushes } from '../../../Data/toiletBrushes';

const ToiletBrushes = () => {
  return (
    <div>
      <Category title={"Toilet Brushes"} data={toiletBrushes} />
    </div>
  );
};

export default ToiletBrushes;
