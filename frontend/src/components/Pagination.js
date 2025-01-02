import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Pagination, Box } from '@mui/material';

const CustomPagination = () => {
  const { currentPage, totalPages, setCurrentPage } = useContext(ProductContext);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        padding: { xs: 2, sm: 4 },
        backgroundColor: '#F0F0F0', // Light flat background color
        borderRadius: '8px',
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)', // Subtle box-shadow for a clean look
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        sx={{
          '& .MuiPaginationItem-root': {
            fontWeight: '600',
            fontSize: '1rem',
            padding: '8px 15px',
            borderRadius: '12px',
            color: '#333', // Dark gray text
            backgroundColor: '#FFFFFF', // White background for each item
            border: '2px solid #E0E0E0', // Light border around each page number
            '&:hover': {
              backgroundColor: '#FF5722', // Orange hover background
              color: '#fff', // White text on hover
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            },
            '&.Mui-selected': {
              backgroundColor: '#FF5722', // Active page with orange background
              color: '#fff', // White text for active page
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomPagination;
