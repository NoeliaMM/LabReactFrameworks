import { appRoutes } from "@/router";
import React from "react";
import classes from "./navbar.component.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemLink } from "./item-link.component";

interface Props {
  isCartVisible: boolean;
  setIsCartVisible: (visible: boolean) => void;
}

export const NavbarComponent: React.FC<Props> = ({
  isCartVisible,
  setIsCartVisible,
}) => {
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <ItemLink
          route={appRoutes.images1}
          prefix={appRoutes.images1}
          label="Images1"
        />
        <ItemLink
          route={appRoutes.images2}
          prefix={appRoutes.images2}
          label="Images2"
        />

        <div className={classes.cart}>
          <ShoppingCartIcon
            onClick={toggleCartVisibility}
            sx={{
              fontSize: 24,
              ml: 1,
              mt: 0.5,
              color: "white",
              cursor: "pointer",
            }}
            titleAccess={isCartVisible ? "Hide cart" : "Show cart"}
          />
        </div>
      </ul>
    </nav>
  );
};
