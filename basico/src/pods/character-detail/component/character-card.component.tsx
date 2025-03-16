import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { CharacterVm } from "../character-detail.vm";

interface Props {
  characterInfo: CharacterVm;
}

export const CharacterCardComponent: React.FC<Props> = ({ characterInfo }) => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#2c2c2c",
        color: "white",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 150,
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px 0 0 8px",
        }}
        image={characterInfo.image}
        alt={characterInfo.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight="bold">
          Creepy Little Girl
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Chip
            label="Alive"
            size="small"
            sx={{ backgroundColor: "green", color: "white" }}
          />
          <Typography variant="body2">- {characterInfo.species}</Typography>
        </Box>

        <Typography variant="body2" sx={{ mt: 2, color: "#bdbdbd" }}>
          Last known location:
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {characterInfo.location}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, color: "#bdbdbd" }}>
          First seen in:
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {characterInfo.origin}
        </Typography>
      </CardContent>
    </Card>
  );
};
