import * as apiModel from "./api";
import * as viewModel from "./member-detail.vm";

export const mapMemberDetailFromApiToVm = (
  member: apiModel.MemberApi
): viewModel.MemberVm =>({
        id: member.id,
        login: member.login,
        avatarUrl: member.avatar_url,
        blog:member.blog,
        bio:member.bio,
        company:member.company
});


