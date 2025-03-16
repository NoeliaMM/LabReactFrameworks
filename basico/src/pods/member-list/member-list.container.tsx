import React from "react";
import { MemberListComponent } from "./components/member-list.component";
import { getMembers } from "./api";
import { mapMemberListFromApiToVm } from "./member-list.mapper";
import { MemberVm } from "./member-list.vm";


interface Props {
  searchTerm: string;
}

export const MemberListContainer: React.FC<Props> = ({searchTerm}) => {

 
  const [members, setMembers] = React.useState<MemberVm[]>([]);
  const currentSearchTerm = React.useRef<string>("");
  React.useEffect(() => {
    if(currentSearchTerm.current !== searchTerm) {
      getMembers(searchTerm).then((json) => 
        setMembers(mapMemberListFromApiToVm(json)));
      currentSearchTerm.current = searchTerm;

    }
  }, [searchTerm]);


  // React.useEffect(() => {
  //   membersMemo.then((result) => setMembers(result));
  // }, [membersMemo]);

  return <MemberListComponent members={members} />;
};
