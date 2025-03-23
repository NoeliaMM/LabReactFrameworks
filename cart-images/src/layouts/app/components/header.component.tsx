import React from "react";
import logoHeader from "/assets/logo_header.png";
import classes from "./header.component.module.css";
// import { userProfileContext } from "@/core/profile/profile.context";

export const HeaderComponent: React.FC = () => {
  // const { userName } = userProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <img src={logoHeader} alt="" className={classes.headerLogo} />
        <div className={classes.usuario}>
          <p>carrito</p>
         
        </div>
      </div>
    </header>
  );
};
