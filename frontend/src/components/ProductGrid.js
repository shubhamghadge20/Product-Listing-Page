import React, { useContext } from 'react';
import { Grid, Box } from '@mui/material';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

const ProductGrid = () => {
  const { currentPageProducts } = useContext(ProductContext);

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: '#f4f4f4',
        borderRadius: 2,
        boxShadow: 1,
        minHeight: 'calc(100vh - 100px)', // Ensures it occupies the full height
        marginBottom: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {currentPageProducts.map((product) => (
          <Grid
            item
            xs={12} // Full width on small screens
            sm={6} // Two items per row on small screens
            md={6} // Two items per row on medium screens
            lg={4} // Three items per row on large screens
            key={product.id}
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center the cards
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
