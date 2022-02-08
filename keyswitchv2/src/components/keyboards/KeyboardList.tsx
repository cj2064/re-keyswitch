import React from "react";
import KeyboardItem from "./KeyboardItem";

// type KeyboardListProps = {
//   keyboardsData: {
//     id: string;
//     image: string;
//     name: string;
//     description: string;
//     price: number;
//   }[];
// };

const KeyboardList = () => {
    
  const keyboardsData = [
    {
      id: "1",
      name: "Ducky One 2 Mini",
      image: "https://m.media-amazon.com/images/I/41fLZrn9oNL._AC_SS450_.jpg",
      description: "The famous keyboard by Ducky.",
      price: 99.99,
    },
  ];

  return (
    <div>
      {keyboardsData.map((keyboard) => (
        <KeyboardItem
          id={keyboard.id}
          name={keyboard.name}
          image={keyboard.image}
          description={keyboard.description}
          price={keyboard.price}
        />
      ))}
    </div>
  );
};

export default KeyboardList;
