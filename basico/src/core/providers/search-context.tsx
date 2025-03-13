import React from "react";

interface SearchContextState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

const defaultState: SearchContextState = {
  searchTerm: "lemoncode", 
  setSearchTerm: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 5,
  setRowsPerPage: () => {},
};

export const SearchContext = React.createContext<SearchContextState>(defaultState);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState(defaultState.searchTerm);
  const [page, setPage] = React.useState(defaultState.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultState.rowsPerPage);

  return (
    <SearchContext.Provider
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
    </SearchContext.Provider>
  );
};
