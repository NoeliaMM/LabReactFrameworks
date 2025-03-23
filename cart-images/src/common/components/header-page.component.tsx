import React from "react";
import classes from "./header-page.component.module.css";

interface Props {
  title: string;
}

export const HeaderPageComponent: React.FC<Props> = (props) => {

  const { title } = props;

  return (
    <div className={classes.headerContainer}>
     <h1>{title}</h1>      
  </div>
  );
};