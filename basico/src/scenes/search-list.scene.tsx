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
    setSearchTerm(newSearchTerm);
  };

  
  return (
    <>    
      <SearchContainer onSubmit={handleSubmit} searchTerm={searchTerm} /> 
      <MemberListContainer  />
    </>
  );
};
  
