import React from "react";
import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

interface Props {
  image: string;
  name: string;
  description?: string;
}

export const CharacterCardComponent: React.FC<Props> = ({ image, name, description }) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "#2c2c2c", color: "white", borderRadius: 2 }}>
    {/* Imagen */}
    <CardMedia
      component="img"
      sx={{ width: 150, height: "auto", objectFit: "cover", borderRadius: "8px 0 0 8px" }}
      image={image} // Imagen de referencia
      alt="Creepy Little Girl"
    />

    {/* Contenido */}
    <CardContent sx={{ flex: 1 }}>
      {/* Nombre */}
      <Typography variant="h5" fontWeight="bold">
        Creepy Little Girl
      </Typography>

      {/* Estado y Especie */}
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <Chip label="Alive" size="small" sx={{ backgroundColor: "green", color: "white" }} />
        <Typography variant="body2">- Human</Typography>
      </Box>

      {/* Última ubicación conocida */}
      <Typography variant="body2" sx={{ mt: 2, color: "#bdbdbd" }}>
        Last known location:
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Mr. Goldenfold's dream
      </Typography>

      {/* Primera aparición */}
      <Typography variant="body2" sx={{ mt: 2, color: "#bdbdbd" }}>
        First seen in:
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Lawnmower Dog
      </Typography>
    </CardContent>
  </Card>

  );
};
