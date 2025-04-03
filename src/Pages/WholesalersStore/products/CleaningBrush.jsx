import React from 'react';
import Category from '../../../Components/Ui/Category';

const CleaningBrushes = () => {
  const cleaningBrushes = [
    {
      image: "https://i.ibb.co/V0fWmSXN/214.jpg",
      heading: "Cleaning Brush 1",
      para: "Durable bristles for deep cleaning.",
      showArrow: false
    },
    {
      image: "https://i.ibb.co/JjQ74y4T/238.jpg",
      heading: "Cleaning Brush 2",
      para: "Ergonomic handle for comfortable grip.",
      showArrow: false
    }
  ];

  return (
    <div>
      <Category title={"Cleaning Brushes"} data={cleaningBrushes} />
    </div>
  );
};

export default CleaningBrushes;
