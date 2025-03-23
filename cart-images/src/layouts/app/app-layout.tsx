import React from "react";
import {
  HeaderComponent,
  NavbarComponent,
} from "./components";
import classes from "./app-layout.module.css";
import { CartScene } from "@/scenes/cart/cart-scene";


interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
     
      {/* <main className={classes.mainContent}>{children}</main>       */}
      <div 
      className={`${classes.content} ${true ? classes.cart : classes.fullWidth}`}
      >
        <div className="gallery">
         {children}
        </div>

        {/* {isCartVisible && ( */}
        <CartScene />
         {/* )} */}
      </div>
     
    </>
  );
};
