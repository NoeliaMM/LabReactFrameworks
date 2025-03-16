import React from "react";
import { generatePath, Link } from "react-router-dom";
import { MemberVm } from "../member-list.vm";
import { appRoutes } from "@/router/routes";
import {TableCell} from "@mui/material";
// import classes from './member-list.module.css';

interface Props {
  member: MemberVm;
  // page: number;
}

export const MemberListItemComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <TableCell>
        <img src={member.avatarUrl} alt={member.login} width={50} height={50} />
      </TableCell>
      <TableCell>
        <Link
          to={generatePath(appRoutes.memberDetail, { id: member.id })}
          // state={{ currentPage: page }} 
        >
          {member.id}
        </Link>
      </TableCell>
      <TableCell>{member.login}</TableCell>
    </>
  );
};
