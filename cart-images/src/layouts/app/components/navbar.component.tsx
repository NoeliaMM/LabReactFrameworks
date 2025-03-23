import { appRoutes} from "@/router";
import React from "react";
import classses from "./navbar.component.module.css";
import { ItemLink } from "./item-link.component";


export const NavbarComponent: React.FC = () => {
  

  
  return (
    <nav className={classses.navbar}>
      <ul className={classses.list}>
        <ItemLink route= {appRoutes.images1} prefix={appRoutes.images1}  label="Images1" />
        <ItemLink route= {appRoutes.images2} prefix={appRoutes.images2}  label="Images2" />      
       
      </ul>
    </nav>
  );
};
