import * as apiModel from "./api";
import * as viewModel from "./character-detail.vm";

export const mapCharacterDetailFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterVm => ({
  id: character.id,
  name: character.name,
  type: character.type,
  status: character.status,
  species: character.species,
  origin: character.origin.name,
  location: character.location.name,
  gender: character.gender,
  image: character.image,
});
