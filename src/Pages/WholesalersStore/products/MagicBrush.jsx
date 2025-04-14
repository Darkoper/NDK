import React from 'react';
import Category from '../../../Components/Ui/Category';

const MagicBrush = () => {
  const MagicBrush = [
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744628771/double_roto_q5ujwd.jpg",
      heading: "Roto",
      showArrow: false
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744628771/Roto_pvu6ps.jpg",
      heading: "double Roto",
      showArrow: false
    },
  ];

  return (
    <div>
      <Category title={"Magic brushes"} data={MagicBrush} />
    </div>
  );
};

export default MagicBrush;
