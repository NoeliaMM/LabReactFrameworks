import React from "react";

interface PageContextState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

const defaultState: PageContextState = {
  searchTerm: "lemoncode", 
  setSearchTerm: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 5,
  setRowsPerPage: () => {},
};

export const PageContext = React.createContext<PageContextState>(defaultState);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState(defaultState.searchTerm);
  const [page, setPage] = React.useState(defaultState.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultState.rowsPerPage);

  return (
    <PageContext.Provider
      value={{
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
