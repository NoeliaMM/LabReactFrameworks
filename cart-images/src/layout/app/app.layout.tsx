import React, { PropsWithChildren } from "react";
import { Title } from "./components";
import { AuthContext } from "@/core/providers";

export const AppLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { user } = React.useContext(AuthContext);

  return (
    <div className="layout-app-container">
      <div className="layout-app-header">
        <Title />
        <div>User: {user}</div>
      </div>
      <main>{children}</main>
    </div>
  );
};
