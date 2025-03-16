import React from "react";
import { generatePath, Link } from "react-router-dom";

import { appRoutes } from "@/router/routes";
import {Avatar, TableCell} from "@mui/material";
import { CharacterVm } from "../character-list.vm";

interface Props {
  character: CharacterVm;
  currentPage: number,   
}

export const CharacterListItemComponent: React.FC<Props> = (props) => {
  const { character,currentPage } = props;

  return (
    <>
      <TableCell>     
        <Avatar alt={character.name} src={character.image}  sx={{ width: 56, height: 56 }}/>
      </TableCell>
      <TableCell>  
          {character.id}       
      </TableCell>
      <TableCell>
      <Link
          to={generatePath(appRoutes.characterDetail, { id: character.id })}
          state={{ currentPage }} // Pasa el estado de la página actual al detalle
        >
          {character.name}
        </Link>
      </TableCell>
      <TableCell>{character.species}</TableCell>
    </>
  );
};
