import { CharacterApi } from "./character-detail.api.vm";

export const getCharacterById = (id: string): Promise<CharacterApi>=> { 
    console.log('getcharacter')
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.json());
};