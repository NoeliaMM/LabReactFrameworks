import { appRoutes } from "@/router/routes";
import React from "react";
import { Link } from "react-router-dom";

export const HomeScene: React.FC = () => {
  return (
    <>
      <li>
        <Link to={appRoutes.searchList}>
          Buscador miembros por organizacion
        </Link>
      </li>
      <li>
        <Link to={appRoutes.characterList}>Listado de Rick & Mortis </Link>
      </li>
    </>
  );
};
