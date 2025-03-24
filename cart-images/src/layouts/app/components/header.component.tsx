import React from "react";
import logoHeader from "/assets/logo_header.png";
import classes from "./header.component.module.css";

export const HeaderComponent: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src={logoHeader} alt="" className={classes.headerLogo} />      
      </div>
    </header>
  );
};
