import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */ import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

const divStyles = css({
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  maxHeight: '100px',
});

const selectStyle = css({
  '&&': {
    width: '150px',
    height: '50px',
    color: 'white',
    margin: 0,
    '> div': {
      width: '100%',
    },
    div: {
      borderBottom: '1px solid white',
      color: 'white',
      marginTop: '20px',
    },
    svg: {
      color: 'white',
    },
  },
});

const InputLabelStyles = css({
  '&&': {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '50px',
    color: 'white',
    marginTop: '10px',
    label: {
      color: 'white',
    },
  },
});

interface FilterTitleProps {
  categorySearch: string;
  setCategorySearch: (category: string) => void;
}

const FilterTitle: React.FC<FilterTitleProps> = ({
  categorySearch,
  setCategorySearch,
}) => {
  const listOptions = ['Shooters', 'MOBA', 'RPG', 'Sports'];

  const handleChangeSelect = async (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setCategorySearch(event.target.value as string);
  };

  return (
    <div css={divStyles}>
      <h1>{categorySearch} Videos</h1>
      <FormControl>
        <InputLabel id="options-label" css={InputLabelStyles}>
          Options
        </InputLabel>

        <Select
          css={selectStyle}
          labelId="options-label"
          id="options"
          value={categorySearch}
          onChange={handleChangeSelect}
          displayEmpty
        >
          {listOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterTitle;
