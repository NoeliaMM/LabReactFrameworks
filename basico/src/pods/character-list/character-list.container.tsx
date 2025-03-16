import React from "react";
import { CharacterListComponent } from "./components/character-list.component";
import { getCharactersRickAndMorty } from "./api";
import { mapCharactersListFromApiToVm } from "./character-list.mapper";
import { PageContext } from "@/core/providers";
import { TextField } from "@mui/material";

export const CharacterListContainer: React.FC = () => {
  const {page,data,setData} = React.useContext(PageContext); 
  const [total, setTotal] = React.useState(1); 
  const [filterTextName, setFilterTextName] = React.useState("");
  const [filterTextSpecie, setFilterTextSpecie] = React.useState("");
  const currentFilterName = React.useRef<string>("");
  const currentFilterSpecie = React.useRef<string>("");
  const currentPage = React.useRef<number>(page);

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const json = await getCharactersRickAndMorty(page + 1)(filterTextName)(filterTextSpecie);
      if(json.results){
        setData(mapCharactersListFromApiToVm(json.results));
        setTotal(json.info.count);
      }
    };

    if(data.length===0 || currentFilterName.current !== filterTextName ||
      currentFilterSpecie.current !== filterTextSpecie 
       || page+1 !== currentPage.current) {
      fetchCharacters();
    }

    currentFilterName.current = filterTextName;
    currentFilterSpecie.current = filterTextSpecie;
    currentPage.current = page;
  }, [page,filterTextName,filterTextSpecie]);

  return (
    <>
      <TextField
        label="Buscar por nombre"
        variant="outlined"
        size="small"
        margin="normal"
        value={currentFilterName.current}
        onChange={(e) => setFilterTextName(e.target.value)}
      />
        <TextField
        label="Buscar por especie"
        variant="outlined"
        size="small"
        margin="normal"
        value={currentFilterSpecie.current}
        onChange={(e) => setFilterTextSpecie(e.target.value)}
      />
      <CharacterListComponent characters={data} total={total} />
    </>
  );
};
