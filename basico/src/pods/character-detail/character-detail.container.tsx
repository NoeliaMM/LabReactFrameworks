import React from "react";

import { CharacterDetailComponent } from "./component/character-detail.component";

import { getCharacterById } from "./api";
import { mapCharacterDetailFromApiToVm } from "./character-detail.mapper";
import { CharacterVm, createEmptyCharacter } from "./character-detail.vm";

interface Props {
  id: string;
}

export const CharacterDetailContainer: React.FC<Props> = (props) => { 

  const { id } = props;

  const[character,setCharacter] = React.useState<CharacterVm>(createEmptyCharacter());

  React.useEffect(()=>{  
    getCharacterById(id).then((data)=>setCharacter(mapCharacterDetailFromApiToVm(data)));
    
},[])
  
  return(
    <CharacterDetailComponent character={character} />     
  )
};