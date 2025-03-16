import React from "react";
import { MemberListComponent } from "./components/member-list.component";
import { getMembers } from "./api";
import { mapMemberListFromApiToVm } from "./member-list.mapper";
import { PageContext } from "@/core/providers";

export const MemberListContainer: React.FC = () => {

  const {searchTerm, data,setData} = React.useContext(PageContext);
  const currentSearchTerm = React.useRef<string>(searchTerm);
  
  React.useEffect(() => {  
    if(data.length===0 || currentSearchTerm.current !== searchTerm) {
      getMembers(searchTerm).then((json) =>       
        setData(mapMemberListFromApiToVm(json)));      
    }
    currentSearchTerm.current = searchTerm;
  }, [searchTerm]);


  return <MemberListComponent members={data} />;
};
