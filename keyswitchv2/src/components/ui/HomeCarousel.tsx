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
          src: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80",
        },
        {
          header: "Custom keyboards",
          caption: "There's a keyboard for everyone",
          key: 2,
          src: "https://images.unsplash.com/photo-1632125972828-a4cfdec70f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
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
