import { PictureInfo } from "@/scenes";
import React from "react";

interface CartContextModel {
  selectedItems: string[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  data: PictureInfo[];
  setData: (data: PictureInfo[]) => void;
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartContextModel>({
  selectedItems: [],
  addItem: () => {},
  removeItem: () => {},
  data: [],
  setData: () => {}
});

export const useCartContext = () => React.useContext(CartContext);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const addItem = (id: string) => {
    setSelectedItems((selectedItems) =>
      !selectedItems.includes(id) ? [...selectedItems, id] : selectedItems
    );
  };

  const removeItem = (id: string) => {
    console.log(selectedItems)
    console.log(id)
    setSelectedItems((selectedItems) =>
      selectedItems.filter((item) => item !== id)
    );
  };

  const [data, setData] = React.useState<PictureInfo[]>([]);

  return (
    <CartContext.Provider value={{ selectedItems, addItem, removeItem, data, setData }}>
      {children}
    </CartContext.Provider>
  );
};
