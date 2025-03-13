import React from "react";

import { MemberDetailComponent } from "./component/member-detail.component";
import { createEmptyMember, MemberVm } from "./member-detail.vm";
import { getMemberById } from "./api";
import { mapMemberDetailFromApiToVm } from "./member-list.mapper";

interface Props {
  id: string;
}

export const MemberDetailContainer: React.FC<Props> = (props) => { 

  const { id } = props;

  const[member,setMember] = React.useState<MemberVm>(createEmptyMember());

  React.useEffect(()=>{  
    getMemberById(id).then((data)=>setMember(mapMemberDetailFromApiToVm(data)));
    
},[])
  
  return(
    <MemberDetailComponent member={member} />     
  )
};