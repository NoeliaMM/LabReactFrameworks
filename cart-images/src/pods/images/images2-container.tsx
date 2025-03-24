import React from "react";
import classes from "./images-scene.module.css";
import { HeaderPageComponent } from "@/common/components";
import { imagesMock2 } from "@/common/mocks/images-mock";
import { useCartContext } from "@/core/provider";
import { PictureInfo } from "./image.vm";
import { ImagesListComponent } from "./components/images-list.component";

export const Images2Container: React.FC = () => {
  const { selectedItems, addItem, removeItem, data, setData } =
    useCartContext();

  const isSelected = (id: string) => selectedItems.includes(id);

  React.useEffect(() => {
    setData((prevData: PictureInfo[]) => {
      const newImages = imagesMock2.filter(
        (newImage) => !prevData.some((item) => item.id === newImage.id)
      );
      return [...prevData, ...newImages];
    });
  }, []);

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      const updatedData = data.map((item: PictureInfo) =>
        item.id === id ? { ...item, selected: checked } : item
      );
      setData(updatedData);
      if (checked) {
        addItem(id);
      } else {
        removeItem(id);
      }
    };

  return (
    <>
      <div className={classes.root}>
        <HeaderPageComponent title="Images2" />
        <ImagesListComponent
          pictures={imagesMock2}
          isSelected={isSelected}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};
