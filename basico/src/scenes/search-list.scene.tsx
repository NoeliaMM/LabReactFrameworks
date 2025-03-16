import React from "react";
import { SearchContainer } from "@/pods/search";
import { MemberListContainer } from "@/pods/member-list";
import { PageContext } from "@/core/providers";


export const SearchListScene: React.FC = () => {

  const {
    searchTerm,
    setSearchTerm,  
  } = React.useContext(PageContext);  

  const handleSubmit = (newSearchTerm: string) => {
    console.log('newSearchTerm', newSearchTerm);
    setSearchTerm(newSearchTerm);
  };
  
  return (
    <>    
      <SearchContainer onSubmit={handleSubmit} searchTerm={searchTerm} /> 
      <MemberListContainer  />
    </>
  );
};

  
