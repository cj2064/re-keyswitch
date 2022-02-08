import React from "react";
import Card from "../ui/Card";

type KeyboardTypes = {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
}

const KeyboardItem = (props: KeyboardTypes) => {
    // const keyboards = [
    //     {
    //         id: '1',
    //         name: 'Ducky One 2 Mini',
    //         image: 'https://m.media-amazon.com/images/I/41fLZrn9oNL._AC_SS450_.jpg',
    //         description: "The famous keyboard by Ducky."
    //     }
    // ]

  return (
    <div>
        <Card>
            <div>
                <img src={props.image} alt={props.name}/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>${props.price}</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </Card>
    </div>
  )
  
};

export default KeyboardItem;
