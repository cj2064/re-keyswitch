import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import classes from './HomeCarousel.module.css';

const HomeCarousel = () => {
  return (
    <UncontrolledCarousel className={classes.carousel}
      items={[
        {
          header: "Keyswitch",
          caption: "The community marketplace for keyboard enthusiasts",
          key: 1,
          src: "https://picsum.photos/id/123/1200/600",
        },
        {
          header: "Custom keyboards",
          caption: "There's a keyboard for everyone",
          key: 2,
          src: "https://picsum.photos/id/456/1200/600",
        },
        {
          header: "Sign up today",
          caption: "It's free!",
          key: 3,
          src: "https://picsum.photos/id/678/1200/600",
        },
      ]}
    />
  );
};

export default HomeCarousel;
