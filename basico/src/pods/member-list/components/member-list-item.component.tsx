import React from "react";
import { generatePath, Link } from "react-router-dom";
import { MemberVm } from "../member-list.vm";
import { appRoutes } from "@/router/routes";
import { TableCell } from "@mui/material";


interface Props {
  member: MemberVm;
 
}

export const MemberListItemComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <TableCell>
        <img src={member.avatarUrl} alt={member.login} width={50} height={50} />
      </TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell>
        <Link to={generatePath(appRoutes.memberDetail, { id: member.id })}>
          {member.login}
        </Link>
      </TableCell>
    </>
  );
};
