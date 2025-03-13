import * as apiModel from "./api";
import * as viewModel from "./member-list.vm";

export const mapMemberListFromApiToVm = (
  membersList: apiModel.MemberApi[]
): viewModel.MemberVm[] =>
  membersList.map((member) => mapItemFromApiToVm(member));

export const mapItemFromApiToVm = (
  member: apiModel.MemberApi
): viewModel.MemberVm => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
});
