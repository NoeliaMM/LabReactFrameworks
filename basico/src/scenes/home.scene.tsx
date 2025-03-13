
import { appRoutes } from "@/router/routes";
import React from "react";
import { Link } from "react-router-dom";

export const HomeScene:React.FC  = ()=> {
  return (
    <>     
      <li>        
        <Link to={appRoutes.searchList}>Buscador miembros por organizacion</Link>
      </li>
      <li>
         <Link to={appRoutes.characterList}>Ir a listado de Rick & Mortis </Link>
      </li>
    </>
  );
};
