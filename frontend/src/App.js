import React, { useState } from 'react';
import ProductProvider from './context/ProductContext';
import ProductGrid from './components/ProductGrid';
import FilterSidebar from './components/FilterSidebar';
import SortingBar from './components/SortingBar';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { Box, IconButton, Drawer, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ProductProvider>
      {/* Search Bar */}
      <Box sx={{ padding: { xs: 1, sm: 2 }, backgroundColor: 'background.paper' }}>
        <SearchBar />
      </Box>

      {/* Sorting Bar */}
      <Box sx={{ padding: { xs: 1, sm: 2 }, backgroundColor: 'background.paper' }}>
        <SortingBar />
      </Box>

      {/* AppBar for Mobile - Menu Button (Only on mobile screens) */}
      <AppBar position="sticky" sx={{ boxShadow: 1, display: { xs: 'block', md: 'none' } }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Filter
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
            padding: 2,
          },
        }}
      >
        <FilterSidebar />
      </Drawer>

      {/* Main Content: Sidebar + Product Grid */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stacks on small screens, side-by-side on larger screens
          gap: 2,
          padding: 2,
          backgroundColor: 'background.default', // Ensure background consistency
        }}
      >
        {/* Filter Sidebar on Large Screens */}
        <Box
          sx={{
            flex: '0 0 300px', // Fixed width for sidebar on larger screens
            display: { xs: 'none', md: 'block' }, // Hides the sidebar on small screens
            borderRadius: 2,
            backgroundColor: 'background.paper',
            boxShadow: 1, // Light shadow for separation
            padding: 2,
          }}
        >
          <FilterSidebar />
        </Box>

        {/* Product Grid */}
        <Box
          sx={{
            flex: 1, // Takes the remaining space
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1, // Light shadow for separation
            padding: 2,
          }}
        >
          <ProductGrid />
          
          {/* Pagination */}
          <Box sx={{ marginTop: 3 }}>
            <Pagination />
          </Box>
        </Box>
      </Box>
    </ProductProvider>
  );
};

export default App;
