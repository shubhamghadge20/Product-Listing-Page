import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { styled } from '@mui/material/styles';

const SortingBar = () => {
  const { sort, setSort } = useContext(ProductContext);

  const FormControlStyled = styled(FormControl)(({ theme }) => ({
    minWidth: 220,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiSelect-root': {
      paddingRight: theme.spacing(5), // Space for the icon
    },
    '& .MuiSelect-icon': {
      right: 10, // Adjusting icon placement
    },
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 2,
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: 3,
        width: '100%',
      }}
    >
      <FormControlStyled size="small">
        <InputLabel id="sorting-label">Sort By</InputLabel>
        <Select
          labelId="sorting-label"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Sort By"
          IconComponent={SortIcon}
        >
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="rating-desc">Rating: High to Low</MenuItem>
          <MenuItem value="new-arrivals">New Arrivals</MenuItem>
        </Select>
      </FormControlStyled>
    </Box>
  );
};

export default SortingBar;
