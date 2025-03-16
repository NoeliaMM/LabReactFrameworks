import React from "react";
import { generatePath, Link } from "react-router-dom";

import { appRoutes } from "@/router/routes";
import {Avatar, TableCell} from "@mui/material";
import { CharacterVm } from "../character-list.vm";

interface Props {
  character: CharacterVm;
  
}

export const CharacterListItemComponent: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <TableCell>     
        <Avatar alt={character.name} src={character.image}  sx={{ width: 56, height: 56 }}/>
      </TableCell>
      <TableCell>
        <Link
           to={generatePath(appRoutes.characterDetail, { id: character.id })}
        
        >
          {character.id}
        </Link>
      </TableCell>
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.species}</TableCell>
    </>
  );
};
