export interface MemberVm {
  id:string;
  login:string;
  blog:string;
  avatarUrl:string;
  bio:string;
  company:string;
}

export const createEmptyMember = ():MemberVm=>({
  id:"",
  login:"",
  blog:"",
  avatarUrl:"",
  bio:"",
  company:""
});