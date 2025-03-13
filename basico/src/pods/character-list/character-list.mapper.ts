import * as apiModel from "./api";
import * as viewModel from "./character-list.vm";

export const mapCharactersListFromApiToVm = (
  characterList: apiModel.CharacterApi[]
): viewModel.CharacterVm[] =>
  characterList.map((character) => mapItemFromApiToVm(character));

export const mapItemFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  type: character.type
});
