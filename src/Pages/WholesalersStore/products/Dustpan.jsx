import React from 'react';
import Category from '../../../Components/Ui/Category';

const Dustpan = () => {
  const Dustpan = [
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744623258/127_bcbbnp.jpg",
      heading: "Dustpan 1",
      showArrow: false
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744623258/117_wsplaj.jpg",
      heading: "Dust Pan 2",
      para: "Ergonomic handle for comfortable grip.",
      showArrow: false
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744623258/146_yc0cwl.jpg",
      heading: "Dust Pan 3",
      showArrow: false
    }
  ];

  return (
    <div>
      <Category title={"Feather brushes"} data={Dustpan} />
    </div>
  );
};

export default Dustpan;
