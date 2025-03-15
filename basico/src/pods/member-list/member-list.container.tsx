import React from "react";
import { MemberListComponent } from "./components/member-list.component";
import { getMembers } from "./api";
import { mapMemberListFromApiToVm } from "./member-list.mapper";
import { MemberVm } from "./member-list.vm";
import { PageContext } from "@/core/providers";

// interface Props {
//   searchTerm: string;
// }

export const MemberListContainer: React.FC = () => {

 const {
    searchTerm,
    // setSearchTerm,  
  } = React.useContext(PageContext); 

  const membersMemo = React.useMemo(() => {
    const fetchMember = async () => {
      const json = await getMembers(searchTerm);
      return mapMemberListFromApiToVm(json);
    };
    return fetchMember();
  }, [searchTerm]);

  const [members, setMembers] = React.useState<MemberVm[]>([]);

  React.useEffect(() => {
    membersMemo.then((result) => setMembers(result));
  }, [membersMemo]);

  return <MemberListComponent members={members} />;
};
