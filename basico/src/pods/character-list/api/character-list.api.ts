import { CharacterApiResponse } from "./character-list.api.vm";

export const getCharactersRickAndMorty =
  (page: number = 1) =>
  (name: string = "")=>(specie: string = ""): Promise<CharacterApiResponse> => {
    let queryParams = `page=${page}`;
    if (name) {
      queryParams += `&name=${name}`;
    }
    if (specie) {
      queryParams += `&species=${specie}`;
    }

    return fetch(`https://rickandmortyapi.com/api/character?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return { results: [], info: { count: 0, pages: 0 } };
        }
        return data;
      })
      .catch(() => {
        return { results: [], info: { count: 0, pages: 0 } };
      });
  };
