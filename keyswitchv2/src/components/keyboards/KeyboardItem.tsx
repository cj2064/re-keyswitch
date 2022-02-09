import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
// import Card from "../ui/Card";

import classes from "./KeyboardItem.module.css";

type KeyboardTypes = {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
};

const KeyboardItem = (props: KeyboardTypes) => {
  return (
    
      <Card className={classes.kbcard}>
        <CardBody>
          <CardImg
            src={props.image}
            alt={props.name}
            className={classes.kbimage}
          />
          <div className={classes.kbdetails}>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {props.description}
            </CardSubtitle>
            <CardText>${props.price}</CardText>
          </div>
          <Button className={classes.kbbutton}>Add to Cart</Button>
        </CardBody>
      </Card>
    
  );
};

export default KeyboardItem;
