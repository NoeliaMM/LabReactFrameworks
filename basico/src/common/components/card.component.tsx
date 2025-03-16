import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  imageUrl: string;
  title: string;
  description?: string;
}

export const CardComponent: React.FC<Props> = ({ imageUrl, title, description }) => {
  return (
    <Card sx={{ width: 345, minWidth: 250 }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${imageUrl})`,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
        title={title}
      />
      {/* TODO: METER BIO Y COMPANY */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
