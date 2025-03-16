import React from "react";

interface DataStatus {
  isLoading: boolean;
  hasError: boolean;
  data: any[]; // Cambia `any` por el tipo adecuado si tienes uno
  searchTerm: string;
}

export const useDataStatus = ({ isLoading, hasError, data, searchTerm }: DataStatus) => {
  if (isLoading) {
    return <p>Cargando datos...</p>;
  }

  if (hasError) {
    return <p>No se pudieron cargar los datos. Inténtalo de nuevo.</p>;
  }

  if (data.length === 0) {
    return <p>No se han encontrado datos para la organización "{searchTerm}".</p>;
  }

  return null; // Si no aplica ninguno, no se muestra mensaje
};
