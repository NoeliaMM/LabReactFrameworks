import React from 'react';
import classes from './search-form.module.css';
import { Button,  TextField } from '@mui/material';

interface Props {
  onSearchSubmit: (searchTerm: string) => void;  
}

interface Props {
  onSearchSubmit: (searchTerm: string) => void;
  initialSearchTerm: string; 
}

export const SearchForm: React.FC<Props> = ({ onSearchSubmit, initialSearchTerm }) => {
  const [inputValue, setInputValue] = React.useState(initialSearchTerm); // Usa el valor inicial

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchSubmit(inputValue.trim());
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Buscar
        </Button>
      </form>
    </div>
  );
};
