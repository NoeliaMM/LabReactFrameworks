import React, { PropsWithChildren } from "react";

interface Props {
  slotTitle: React.ReactNode;
}

export const CenteredLayout: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, slotTitle } = props;

  return (
    <>
      <div style={{ textAlign: "center", border: "3px solid indianred" }}>
        {slotTitle}
      </div>
      <div className="layout-center" style={{ border: "3px solid blue" }}>
        {children}
      </div>
    </>
  );
};
