import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.Member[]): vm.Member[] =>
  data.map(mapMemberToVM);

export const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
