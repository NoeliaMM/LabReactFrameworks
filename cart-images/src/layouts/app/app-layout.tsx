import React from "react";
import { HeaderComponent, NavbarComponent } from "./components";
import classes from "./app-layout.module.css";
import { CartScene } from "@/scenes/cart/cart-scene";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const [isCartVisible, setIsCartVisible] = React.useState(true);

  return (
    <>
      <HeaderComponent />
      <NavbarComponent  isCartVisible={isCartVisible} 
        setIsCartVisible={setIsCartVisible} />
      <div
        className={`${classes.content} ${
          isCartVisible ? classes.cart : classes.fullWidth
        }`}
      >
        <div className="gallery">{children}</div>

        {isCartVisible && <CartScene />}
      </div>
    </>
  );
};
