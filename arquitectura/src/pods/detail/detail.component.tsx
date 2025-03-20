import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMember } from "./api/api";
import { mapMemberToVM } from "./detail.mappers";

interface Props {
  member: MemberDetail;
  showInfo: boolean;
}

export const Detail: React.FC<Props> = (props) => {
  const { member, showInfo } = props;

  return (
    <div>
      <h2>{member.name}</h2>
      <img src={member.avatarUrl} alt="avatar" />
      {showInfo && (
        <>
          <p> id: {member.id}</p>
          <p> login: {member.login}</p>
          <p> company: {member.company}</p>
          <p> bio: {member.bio}</p>
        </>
      )}
      {/* <Link to={routes.list}>Back to list page</Link> */}
    </div>
  );
};
