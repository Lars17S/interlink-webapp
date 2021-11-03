import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */ import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
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
      marginTop: '16px',
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
    label: {
      color: 'white',
    },
  },
});

interface FilterTitleProps {}

const FilterTitle: React.FC<FilterTitleProps> = () => {
  const [filterOption, setFilterOption] = React.useState('Shooters');
  const listOptions = ['Shooters', 'MOBA', 'RPG', 'Sports'];

  const handleChangeSelect = async (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setFilterOption(event.target.value as string);
  };

  return (
    <div css={divStyles}>
      <h1>{filterOption} Videos</h1>
      <FormControl>
        <InputLabel id="options-label" css={InputLabelStyles}>
          Options
        </InputLabel>
        <Select
          css={selectStyle}
          labelId="options-label"
          id="options"
          value={filterOption}
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
