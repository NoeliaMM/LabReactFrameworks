import { MemberApi } from "./member-detail.api.vm";

export const getMemberById = (id: string): Promise<MemberApi> => {
  return fetch(`https://api.github.com/user/${id}`).then((response) =>
    response.json()
  );
};
