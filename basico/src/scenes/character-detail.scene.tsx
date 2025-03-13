import { CharacterDetailContainer } from "@/pods/character-detail";
import React from "react";
import { useParams } from "react-router-dom";

export const CharacterDetailScene: React.FC = () => {
    const { id } = useParams<string>();
    const memberId = id ?? '';
    
  return (
    <>
      <CharacterDetailContainer id={memberId} />
    </>
  );
};
