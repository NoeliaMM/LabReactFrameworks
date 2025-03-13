import * as apiModel from "./api";
import * as viewModel from "./character-detail.vm";

export const mapCharacterDetailFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterVm =>({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image
});


