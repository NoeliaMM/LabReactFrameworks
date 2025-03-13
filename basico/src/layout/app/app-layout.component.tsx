import React, { PropsWithChildren } from "react";
import classes from "./app-layout.module.css";
import { HeaderSceneComponent } from "@/common/components";
import { useLocation, useMatch } from "react-router-dom";
import { appRoutes } from "@/router/routes";

export const AppLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const location = useLocation();
  const isDetail = useMatch(appRoutes.memberDetail);

  let title = "";
  let showLink = true;

  if (location.pathname === appRoutes.searchList) {
    title = "Buscador miembros organización";

  } else if (location.pathname === appRoutes.characterList) {
    title = "Listado characters Rick & Morty";
  } else if (isDetail) {
    title = "Detalle";

  } else {
    title = "Home";
    showLink =false;
  }

  return (
    <div className={classes.container}>
      <HeaderSceneComponent title={title} showLink={showLink} />
      <main>{children}</main>
    </div>
  );
};
