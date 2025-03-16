import { MemberApi } from "./member-list.api.vm";

export const getMembers = async (org: string): Promise<MemberApi[]> => {
   try {
    const response = await fetch(`https://api.github.com/orgs/${org}/members`);
    
    if (!response.ok) {    
      if (response.status === 404) {
        throw new Error('La organización no existe');
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    }

    return await response.json();
  } catch (e) {    
    return []; 
  }
};
