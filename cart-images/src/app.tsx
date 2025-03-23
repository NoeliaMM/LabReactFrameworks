import React from "react";


import "./style.css";
import { AppRouter } from "@/router";
import { CartProvider } from "./core/provider";


export const App: React.FC = () => {

  return (
    <CartProvider>
      <AppRouter/>
     </CartProvider>
    );
};
