import { MemberApi } from "./member-list.api.vm";

export const getMembers = async (org:string): Promise<MemberApi[]> => {
  console.log('getMember')
  return fetch(`https://api.github.com/orgs/${org}/members`)
  .then((response) => response.json())
};
