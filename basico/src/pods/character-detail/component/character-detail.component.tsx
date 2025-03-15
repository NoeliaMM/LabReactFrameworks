import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/router/routes";
import { CharacterVm } from "../character-detail.vm";
import { CharacterCardComponent } from "./character-card.component";

interface Props {
  character: CharacterVm;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character } = props;


  if (!character.image) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Link to={appRoutes.characterList}>Volver al Listado de Rick & Mortis</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <CharacterCardComponent image={character.image} name={character.name} />      
      </div>
    </>
  );
};
