import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { PictureInfo } from "@/scenes";
import { useCartContext } from "@/core/provider";
import { useResponsiveColumns } from "@/common/hooks/useResponsiveColumns";

interface Props {
  pictures: PictureInfo[];
}

export const ImagesList: React.FC<Props> = ({ pictures }) => {
  const { selectedItems, addItem, removeItem, data, setData } =
    useCartContext();

  const isSelected = (id: string) => selectedItems.includes(id);
  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;

      const revData = data.map((item: PictureInfo) => (
            item.id === id ? { ...item, selected: checked } : item
        ));
      setData(revData);

      if (event.target.checked) {
        addItem(id);
      } else {
        removeItem(id);
      }
    };
  React.useEffect(() => {
    const updatePictures = pictures.map((item) => ({
      ...item,
      selected: selectedItems.includes(item.id),
    }));
    setData(updatePictures);
  }, [ selectedItems]);

  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      cols={useResponsiveColumns()}
      gap={8}
    >
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.picUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.picUrl}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <ImageListItemBar title={item.title} position="below" sx={{ flexGrow: 1 }}/>
          <FormControlLabel 
          sx={{ marginTop: '-10px',marginLeft: 2 }}         
            control={
              <Checkbox
                checked={isSelected(item.id)}
                onChange={(e) => handleChange(item.id)(e)}
                color="default"
                size="small"
              />
            }
            label="Add"
           
          />
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
