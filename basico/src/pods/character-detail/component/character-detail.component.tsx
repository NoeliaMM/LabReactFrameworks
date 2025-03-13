import React from "react";
import { Link } from "react-router-dom";

import { appRoutes } from "@/router/routes";

import { CardComponent } from "@/common/components/card.component";
import { CharacterVm } from "../character-detail.vm";

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
          height: "100vh",
        }}
      >
        <CardComponent imageUrl={character.image} title={character.name} />      
      </div>
    </>
  );
};
