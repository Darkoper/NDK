import React from 'react';
import Category from '../../../Components/Ui/Category';

const FeatherBrush = () => {
  const FeatherBrush = [
    {
      image: "https://i.ibb.co/V0fWmSXN/214.jpg",
      heading: "Taiwan Duster",
      para: "Durable bristles for deep cleaning.",
      showArrow: false
    },
    {
      image: "https://i.ibb.co/JjQ74y4T/238.jpg",
      heading: "Wooden Handle Taiwan Duster",
      para: "Ergonomic handle for comfortable grip.",
      showArrow: false
    },
    {
      image: "https://i.ibb.co/V0fWmSXN/214.jpg",
      heading: "Sheru PP Duster",
      para: "Ergonomic handle for comfortable grip.",
      showArrow: false
    }
  ];

  return (
    <div>
      <Category title={"Feather brushes"} data={FeatherBrush} />
    </div>
  );
};

export default FeatherBrush;
