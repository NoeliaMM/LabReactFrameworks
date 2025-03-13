import { CharacterApiResponse } from "./character-list.api.vm";

export const getCharactersRickAndMorty = async (page:number = 1): Promise<CharacterApiResponse> => {
  console.log('getCharactersRickAndMorty',page);
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data: CharacterApiResponse = await response.json();
  console.log('data',data);
  return data;
};
