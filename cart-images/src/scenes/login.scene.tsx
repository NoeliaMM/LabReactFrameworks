import React from "react";
import { CenteredLayout } from "@/layout";
import { LoginContainer } from "@/pods/login";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout slotTitle={<h3>Hello lemoncoders!</h3>}>
      <LoginContainer />
    </CenteredLayout>
  );
};
