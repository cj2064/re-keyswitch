import React from "react";
import Card from "../ui/Card";
import classes from './KeyboardItem.module.css'

type KeyboardTypes = {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
}

const KeyboardItem = (props: KeyboardTypes) => {

  return (
    <div className={classes.kbcard}>
        <Card>
            <div>
                <img src={props.image} alt={props.name} className={classes.kbimage}/>
            </div>
            <div className={classes.kbdetails}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>${props.price}</p>
            </div>
            <div>
                <button className={classes.kbbutton}>Add to Cart</button>
            </div>
        </Card>
    </div>
  )
  
};

export default KeyboardItem;
