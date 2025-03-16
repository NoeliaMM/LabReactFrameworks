export interface CharacterVm {
  id: string;
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  type: string;
  gender: string;
  image: string;
}

export const createEmptyCharacter = (): CharacterVm => ({
  id: "",
  name: "",
  status: "",
  species: "",
  origin: "",
  location: "",
  type: "",
  gender: "",
  image: "",
});
