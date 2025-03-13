import React from "react";
import { SearchForm } from "./components";


interface Props {
  onSubmit: (searchTerm: string) => void;
  searchTerm: string; 
}

export const SearchContainer: React.FC<Props> = ({ onSubmit, searchTerm }) => {
  return <SearchForm onSearchSubmit={onSubmit} initialSearchTerm={searchTerm} />

}