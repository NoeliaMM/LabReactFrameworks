import React from "react";

interface PageContextState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
  data: any[];
  setData: (data: any[]) => void;
  hasFetchedData: boolean,
  setHasFetchedData: (fetched: boolean) => void,
}

const defaultState: PageContextState = {
  searchTerm: "lemoncode", 
  setSearchTerm: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 5,
  setRowsPerPage: () => {},
  data: [],
  setData: () => {},
  hasFetchedData: false,
  setHasFetchedData: () => {},
};

export const PageContext = React.createContext<PageContextState>(defaultState);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState(defaultState.searchTerm);
  const [data, setData] = React.useState(defaultState.data);
  const [page, setPage] = React.useState(defaultState.page);
  const [hasFetchedData, setHasFetchedData] = React.useState(defaultState.hasFetchedData);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultState.rowsPerPage);

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
        hasFetchedData,
        setHasFetchedData,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
