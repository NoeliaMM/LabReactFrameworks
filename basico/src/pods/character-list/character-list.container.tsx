import React from "react";
import { CharacterListComponent } from "./components/character-list.component";
import { getCharactersRickAndMorty } from "./api";
import { CharacterVm } from "./character-list.vm";
import { mapCharactersListFromApiToVm } from "./character-list.mapper";
import { PageContext } from "@/core/providers";

export const CharacterListContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterVm[]>([]);
  const [total, setTotal] = React.useState(1);

  const { page } = React.useContext(PageContext);

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const json = await getCharactersRickAndMorty(page + 1);
      setCharacters(mapCharactersListFromApiToVm(json.results));
      setTotal(json.info.count);
    };

    fetchCharacters();
  }, [page]);

  return <CharacterListComponent characters={characters} />;
};
