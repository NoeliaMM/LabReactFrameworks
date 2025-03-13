import React from "react";
import { TableComponent } from "@/common/components/table.component";
import { CharacterListItemComponent } from "./character-list-item.component";
import { CharacterVm } from "../character-list.vm";


interface Props {
  characters: CharacterVm[];
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
  total:number;
}

export const CharacterListComponent: React.FC<Props> = ({
  characters,
  page,
  total,
  setPage, 
  setRowsPerPage,
}) => {
  return (
    <TableComponent<CharacterVm>
      key={page}
      data={characters}   
      rowsPerPageOptions = {[]}
      columns={[
        { label: "Avatar", key: "image" },
        { label: "Id", key: "id" },
        { label: "Nombre", key: "name" },
        { label: "Tipo", key: "type" },
      ]}
      page={page}
      total = {total}
      setPage={setPage}
      rowsPerPage={20}
      setRowsPerPage={setRowsPerPage}
      renderRow={(character) => (       
        <CharacterListItemComponent key={character.id} character={character} page={page-1} />     
      )}
    />
  );
};
