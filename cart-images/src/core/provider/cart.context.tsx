
import { PictureInfo } from "@/pods/images/image.vm";
import React from "react";

interface CartContextModel {
  selectedItems: string[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  data: PictureInfo[];
  setData: React.Dispatch<React.SetStateAction<PictureInfo[]>>; 
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
  const [data, setData] = React.useState<PictureInfo[]>([]);

  const addItem = (id: string) => {
    setSelectedItems((selectedItems) =>
      !selectedItems.includes(id) ? [...selectedItems, id] : selectedItems
    );
  };

  const removeItem = (id: string) => {
      setSelectedItems((selectedItems) =>
      selectedItems.filter((item) => item !== id)
    );
  };
   React.useEffect(() => {
      const updatedData = data.map((item) => ({
        ...item,
        selected: selectedItems.includes(item.id),
      }));
      setData(updatedData);
    }, [selectedItems,setData]);


  return (
    <CartContext.Provider value={{ selectedItems, addItem, removeItem, data, setData }}>
      {children}
    </CartContext.Provider>
  );
};
