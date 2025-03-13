export interface MemberVm {
  id:string;
  login:string;
  blog:string;
  avatarUrl:string;
}

export const createEmptyMember = ():MemberVm=>({
  id:"",
  login:"",
  blog:"",
  avatarUrl:"",
});