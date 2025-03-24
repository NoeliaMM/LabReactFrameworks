import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import { useResponsiveColumns } from "@/common/hooks/useResponsiveColumns";

import { PictureInfo } from "../image.vm";

interface Props {
  pictures: PictureInfo[];
  isSelected: (id: string) => boolean;
  handleChange: (
    id: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImagesListComponent: React.FC<Props> = ({
  pictures,
  isSelected,
  handleChange,
}) => {
  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      cols={useResponsiveColumns()}
      gap={8}
    >
      {pictures.map((item) => (
        <ImageListItem key={item.id} >
          <img
            srcSet={`${item.picUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.picUrl}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%", 
              height: "150px", 
              objectFit: "cover" 
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
              padding:'5px'
            }}
          >
            <ImageListItemBar
              title={item.title}
              position="below"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              sx={{ marginTop: "-5px", marginLeft: 2,marginRight:0 }}
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
