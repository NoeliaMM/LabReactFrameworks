import React from "react";
import { CharacterListComponent } from "./components/character-list.component";
import { getCharactersRickAndMorty } from "./api";
import { CharacterVm } from "./character-list.vm";
import { mapCharactersListFromApiToVm } from "./character-list.mapper";


interface Props {
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

export const CharacterListContainer: React.FC<Props> = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const [characters, setCharacters] = React.useState<CharacterVm[]>([]);
  const [total, setTotal] = React.useState(1);

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const json = await
       getCharactersRickAndMorty(page+1);
      setCharacters(mapCharactersListFromApiToVm(json.results)); 
      setTotal(json.info.count);
    };
  
    fetchCharacters();
  }, [page]);

  return (
    <CharacterListComponent
      characters={characters}
      page={page}
      total ={total}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    />
  );
};
