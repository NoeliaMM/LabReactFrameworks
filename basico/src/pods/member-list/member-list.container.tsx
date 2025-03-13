import React from "react";
import { MemberListComponent } from "./components/member-list.component";
import { getMembers } from "./api";
import { mapMemberListFromApiToVm } from "./member-list.mapper";
import { MemberVm } from "./member-list.vm";

interface Props {
  searchTerm: string;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

export const MemberListContainer: React.FC<Props> = ({
  searchTerm,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {


  const membersMemo = React.useMemo(() => {
    const fetchMember = async () => {
      const json = await getMembers(searchTerm);
      return mapMemberListFromApiToVm(json);
    };
    return fetchMember(); 
  }, [searchTerm]);

  const [members, setMembers] = React.useState<MemberVm[]>([]);

  React.useEffect(() => {
    // Si `members` cambia, resuelve la promesa y la almacena en el state
    membersMemo.then((result) => setMembers(result));
  }, [membersMemo]);

  return (
    <MemberListComponent
      members={members}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    />
  );
};
