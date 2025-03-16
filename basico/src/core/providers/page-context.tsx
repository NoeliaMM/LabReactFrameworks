import React, { PropsWithChildren } from "react";

interface PageContextModel {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const defaultState: PageContextModel = {
  searchTerm: "lemoncode",
  setSearchTerm: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 5,
  setRowsPerPage: () => {},
  data: [],
  setData: () => {},
};

export const PageContext = React.createContext<PageContextModel>(defaultState);

export const PageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState(defaultState.searchTerm);
  const [data, setData] = React.useState(defaultState.data);
  const [page, setPage] = React.useState(defaultState.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    defaultState.rowsPerPage
  );

  return (
    <PageContext.Provider
      value={{
        data,
        setData,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
