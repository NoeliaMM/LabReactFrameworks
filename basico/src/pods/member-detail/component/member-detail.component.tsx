import React from "react";
import { Link } from "react-router-dom";
import { MemberVm } from "../member-detail.vm";
import { appRoutes } from "@/router/routes";
import { SearchContext } from "@/core/providers";
import { CardComponent } from "@/common/components/card.component";

interface Props {
  member: MemberVm;
}

export const MemberDetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  const { searchTerm } = React.useContext(SearchContext);

  if (!member.avatarUrl) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Link to={appRoutes.searchList}>Volver al Listado de {searchTerm}</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CardComponent imageUrl={member.avatarUrl} title={member.login} />      
      </div>
    </>
  );
};
