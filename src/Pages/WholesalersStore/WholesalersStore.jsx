import React from 'react';
import Card from "../../Components/Ui/Card";

const WholesalersStore = () => {
  const cards = [
    {
      image: "https://imgur.com/pZTtbq4.png",
      heading: "Hanger",
      btn: "View More",
      path: "/products/Wholesalers-store/Hangers"
    },
    {
      image: "https://i.ibb.co/tPLfkYjt/21.jpg",
      heading: "Wipers",
      btn: "View More",
      path: "/products/Wholesalers-store/Wipers"
    },
    {
      image: "https://i.ibb.co/v44WMtqN/246.jpg",
      heading: "Spray Bottles",
      btn: "View More",
      path: "/products/Wholesalers-store/SprayBottles"
    },
    {
      image: "https://i.ibb.co/Xr3hp8RQ/160.jpg",
      heading: "Toilet Brushes",
      btn: "View More",
      path: "/products/Wholesalers-store/ToiletBrushes"
    },  
    {
      image: "https://i.ibb.co/bjwcN0sk/97.jpg",
      heading: "Mop",
      btn: "View More",
      path: "/products/Wholesalers-store/Mops"
    },
    {
      image: "https://i.ibb.co/ZRjRTBVn/32.jpg",
      heading: "Ropes",
      btn: "View More",
      path: "/products/Wholesalers-store/Ropes"
    },
    {
      image: "https://i.ibb.co/V0fWmSXN/214.jpg",
      heading: "Cleaning Brushes",
      btn: "View More",
      path: "/products/Wholesalers-store/CleaningBrushes"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            alt={card.heading}
            heading={card.heading}
            para={card.para}
            btn={card.btn}
            path={card.path}
          />
        ))}
      </div>
    </>
  );
};

export default WholesalersStore;
