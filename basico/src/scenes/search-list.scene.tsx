import React from "react";
import { SearchContainer } from "@/pods/search";
import { MemberListContainer } from "@/pods/member-list";
import { SearchContext } from "@/core/providers";


export const SearchListScene: React.FC = () => {
  const handleSubmit = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const {
    searchTerm,
    setSearchTerm,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  } = React.useContext(SearchContext);  
  
  return (
    <>
      <SearchContainer onSubmit={handleSubmit} searchTerm={searchTerm} /> 
      <MemberListContainer         
        searchTerm={searchTerm}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};

  
