import React from "react";
import { CharacterListComponent } from "./components/character-list.component";
import { getCharactersRickAndMorty } from "./api";
import { mapCharactersListFromApiToVm } from "./character-list.mapper";
import { PageContext } from "@/core/providers";
import { TextField } from "@mui/material";
import { useDebounce } from "@/common/hooks";

export const CharacterListContainer: React.FC = () => {
  const { page, setPage, data, setData } = React.useContext(PageContext);
  const [total, setTotal] = React.useState(1);
  const [inputs, setInputs] = React.useState({ name: "", specie: "" });

  const debouncedName = useDebounce(inputs.name, 500);
  const debouncedSpecie = useDebounce(inputs.specie, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    setPage(0); 
  };

  React.useEffect(() => {
    const fetchCharacters = async () => {     
      if (
        (debouncedName.length === 0 && debouncedSpecie.length === 0) ||
        debouncedName.length >= 3 || debouncedSpecie.length >= 3
      ) {
        const json = await getCharactersRickAndMorty(page + 1)(debouncedName)(debouncedSpecie);
        if (json.results) {
          setData(mapCharactersListFromApiToVm(json.results));
          setTotal(json.info.count);
        }
      }
    };

    fetchCharacters();
  }, [page, debouncedName, debouncedSpecie, setData]);

  return (
    <>
      <TextField
        name="name"
        label="Buscar por nombre"
        variant="outlined"
        size="small"
        margin="normal"
        value={inputs.name}  
        onChange={handleChange}
      />
      <TextField
        name="specie"
        label="Buscar por especie"
        variant="outlined"
        size="small"
        margin="normal"
        value={inputs.specie} 
        onChange={handleChange}
      />
      <CharacterListComponent characters={data} total={total} />
    </>
  );
};
