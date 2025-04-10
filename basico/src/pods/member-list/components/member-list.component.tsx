import React from "react";
import { MemberVm } from "../member-list.vm";
import { TableComponent } from "@/common/components";
import { MemberListItemComponent } from "./member-list-item.component";
import { PageContext } from "@/core/providers";

interface Props {
  members: MemberVm[];
}

export const MemberListComponent: React.FC<Props> = ({ members }) => {
  const { rowsPerPage } = React.useContext(PageContext);

  return (
        <TableComponent<MemberVm>
          data={members}
          columns={[
            { label: "Avatar", key: "avatarUrl" },
            { label: "Id", key: "id" },
            { label: "Nombre", key: "login" },
          ]}
          rowsPerPage={rowsPerPage}
          renderRow={(member) => (
            <MemberListItemComponent key={member.id} member={member} />
          )}
        /> 
  );
};
