import React from "react";
import classes from "./header-page.component.module.css";
import { appRoutes } from "@/router/routes";
import { Link } from "react-router-dom";

interface Props {
  title: string;  
  showLink?: boolean;
}

export const HeaderSceneComponent: React.FC<Props> = (props) => {

  const { title,showLink} = props;

  return (
    <div className={classes.container}>
   
      <h1 className={classes.title}>{title}</h1> 

      <p>{showLink ? <Link to={appRoutes.home}>Volver a Home</Link> : ''}</p>
     
  </div>
  );
};