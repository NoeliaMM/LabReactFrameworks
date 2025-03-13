import React from "react";
import { MemberVm } from "../member-list.vm";
import { TableComponent } from "@/common/components/table.component";
import { MemberListItemComponent } from "./member-list-item.component";


interface Props {
  members: MemberVm[];
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

export const MemberListComponent: React.FC<Props> = ({
  members,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  return (
    <TableComponent<MemberVm> 
      data={members}    
      columns={[
        { label: "Avatar", key: "avatarUrl" },
        { label: "Id", key: "id" },
        { label: "Nombre", key: "login" },
      ]}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      renderRow={(member) => (       
        <MemberListItemComponent key={member.id} member={member} page={page} />     
      )}
    />
  );
};
