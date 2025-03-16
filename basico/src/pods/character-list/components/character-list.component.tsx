import React from "react";
import { TableComponent } from "@/common/components/table.component";
import { CharacterListItemComponent } from "./character-list-item.component";
import { CharacterVm } from "../character-list.vm";
import { PageContext } from "@/core/providers";

interface Props {
  characters: CharacterVm[];
  total: number;
}

export const CharacterListComponent: React.FC<Props> = ({ characters,total }) => {
  const { page } = React.useContext(PageContext);
  return (    
    <TableComponent<CharacterVm>
      key={page}
      data={characters}
      total={total}
      rowsPerPageOptions={[]}
      columns={[
        { label: "Avatar", key: "image" },
        { label: "Id", key: "id" },
        { label: "Nombre", key: "name" },
        { label: "Especie", key: "species" },
      ]}
      rowsPerPage={20}
      renderRow={(character) => (
        <CharacterListItemComponent
          key={character.id}
          character={character}
          currentPage={page}
        />
      )}
    />
  );
};
