import React from "react";
import { CharacterListContainer } from "@/pods/character-list/character-list.container";
import { SearchContext } from "@/core/providers";

export const CharacterListScene: React.FC = () => {
  const { page, setPage, rowsPerPage, setRowsPerPage } =
    React.useContext(SearchContext);

  return (
    <>
      <CharacterListContainer
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};
