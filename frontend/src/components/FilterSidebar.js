import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Checkbox, FormGroup, FormControlLabel, Slider, RadioGroup, Radio, Typography, Box, Divider } from '@mui/material';

const FilterSidebar = () => {
  const { filters, setFilters } = useContext(ProductContext);

  useEffect(() => {
    if (!Array.isArray(filters.priceRange) || filters.priceRange.length !== 2) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [0, 100000],
      }));
    }
  }, [filters, setFilters]);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };

      if (Array.isArray(updatedFilters[type])) {
        updatedFilters[type] = updatedFilters[type].includes(value)
          ? updatedFilters[type].filter((item) => item !== value)
          : [...updatedFilters[type], value];
      } else {
        updatedFilters[type] = value;
      }

      return updatedFilters;
    });
  };

  const handlePriceRangeChange = (event, newValue) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setFilters((prev) => ({
        ...prev,
        priceRange: newValue,
      }));
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 300 },
        padding: 3,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        alignSelf: { xs: 'center', sm: 'flex-start' },
        marginBottom: { xs: 2, sm: 0 },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5', textAlign: 'center' }}>
        Filters
      </Typography>

      <Divider sx={{ marginY: 1 }} />

      {/* Category Filter */}
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Category
        </Typography>
        <FormGroup>
          {['Electronics', 'Apparel', 'jewelery'].map((category) => (
            <FormControlLabel
              key={category}
              control={<Checkbox />}
              label={category}
              checked={filters.category.includes(category)}
              onChange={() => handleFilterChange('category', category)}
              sx={{
                '& .MuiFormControlLabel-label': { fontSize: '1rem', color: '#333', fontWeight: 500 },
                '& .MuiCheckbox-root': { color: '#3f51b5' },
                '&:hover': { backgroundColor: '#f0f4ff', borderRadius: 1 },
              }}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ marginY: 1 }} />

      {/* Price Range Filter */}
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Price Range
        </Typography>
        <Slider
          value={filters.priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `₹${value}`}
          min={0}
          max={100000}
          sx={{
            '& .MuiSlider-thumb': { backgroundColor: '#3f51b5' },
            '& .MuiSlider-rail': { backgroundColor: '#d6d6d6' },
            '& .MuiSlider-track': { backgroundColor: '#3f51b5' },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#555' }}>
            ₹{filters.priceRange[0]}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#555' }}>
            ₹{filters.priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ marginY: 1 }} />

      {/* Rating Filter */}
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Rating
        </Typography>
        <FormGroup>
          {[5, 4, 3, 2, 1].map((rating) => (
            <FormControlLabel
              key={rating}
              control={<Checkbox />}
              label={`${rating} Stars`}
              checked={filters.rating.includes(rating)}
              onChange={() => handleFilterChange('rating', rating)}
              sx={{
                '& .MuiFormControlLabel-label': { fontSize: '1rem', color: '#333', fontWeight: 500 },
                '& .MuiCheckbox-root': { color: '#3f51b5' },
                '&:hover': { backgroundColor: '#f0f4ff', borderRadius: 1 },
              }}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ marginY: 1 }} />

      {/* Availability Filter */}
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Availability
        </Typography>
        <RadioGroup
          value={filters.availability}
          onChange={(e) => handleFilterChange('availability', e.target.value)}
          sx={{
            '& .MuiFormControlLabel-label': { fontSize: '1rem', color: '#333', fontWeight: 500 },
            '& .MuiRadio-root': { color: '#3f51b5' },
          }}
        >
          <FormControlLabel value="in-stock" control={<Radio />} label="In Stock" />
          <FormControlLabel value="out-of-stock" control={<Radio />} label="Out of Stock" />
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
