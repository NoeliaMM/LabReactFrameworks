import React from "react";
import { MemberDetailContainer } from "@/pods/member-detail";
import { useParams } from "react-router-dom";

export const MemberDetailScene: React.FC = () => {
    const { id } = useParams<string>();
    const memberId = id ?? '';
    
  return (
    <>
      <MemberDetailContainer id={memberId} />
    </>
  );
};
