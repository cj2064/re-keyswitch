import React from "react";
import { CardGroup } from "reactstrap";
import KeyboardItem from "./KeyboardItem";
import classes from "./KeyboardList.module.css";

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
      price: 129.99,
    },
    {
      id: "2",
      name: "Logitech G Pro",
      image:
        "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-2.png?v=1",
      description: "For the competitive and casual gamer.",
      price: 99.99,
    },
    {
      id: "3",
      name: "Das Keyboard 4 Ultimate",
      image:
        "https://www.daskeyboard.com/images/das-keyboard-4-ultimate/daskeyboard-4-ultimate-front-view.jpg",
      description: "The true touch-typist's keyboard.",
      price: 169.99,
    },
  ];

  return (
    <div className={classes.kbcards}>
      {keyboardsData.map((keyboard) => (
        <KeyboardItem
          key={keyboard.id}
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
