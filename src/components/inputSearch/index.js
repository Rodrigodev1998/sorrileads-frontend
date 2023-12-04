import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import './SearchInput.css';
import { InputAdornment } from '@mui/material';
import { useEffect } from 'react';

const SearchInput = ({ onSearch, onClear }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearInput = () => {
    setSearchText('');
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]);

  return (
    <div className='input'>
      <TextField
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Digite aqui..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {searchText && (
                <IconButton onClick={clearInput} className="clear-icon">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
