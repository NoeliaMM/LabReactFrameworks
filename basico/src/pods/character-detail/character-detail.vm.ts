export interface CharacterVm {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
image:string
}

export const createEmptyCharacter = ():CharacterVm=>({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image:''
  
});