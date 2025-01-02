import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 100000], // Default price range in INR
    rating: [],
    availability: '', // Can be 'in-stock', 'out-of-stock', or ''
  });
  const [sort, setSort] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  // Adjust itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setItemsPerPage(5); // Fewer items on smaller screens
      } else if (screenWidth < 1200) {
        setItemsPerPage(8); // Moderate items on medium screens
      } else {
        setItemsPerPage(10); // Default for larger screens
      }
    };

    updateItemsPerPage(); // Run on mount
    window.addEventListener('resize', updateItemsPerPage); // Update on resize

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  // Fetch products from API
  useEffect(() => {
    axios.get('http://localhost:5000/api').then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  // Apply filters, search, and sorting
  useEffect(() => {
    let tempProducts = [...products];

    // Category filter
    if (filters.category.length > 0) {
      tempProducts = tempProducts.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Price range filter
    if (filters.priceRange.length === 2) {
      tempProducts = tempProducts.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    // Rating filter
    if (filters.rating.length > 0) {
      tempProducts = tempProducts.filter(product =>
        filters.rating.includes(product.rating)
      );
    }

    // Availability filter
    if (filters.availability) {
      tempProducts = tempProducts.filter(product =>
        filters.availability === 'in-stock'
          ? product.availability === 'In Stock'
          : filters.availability === 'out-of-stock'
          ? product.availability === 'Out of Stock'
          : true
      );
    }

    // Search filter
    if (searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sort) {
      if (sort === 'price-asc') {
        tempProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-desc') {
        tempProducts.sort((a, b) => b.price - a.price);
      } else if (sort === 'rating-desc') {
        tempProducts.sort((a, b) => b.rating - a.rating);
      }
    }

    // Update filtered products
    setFilteredProducts(tempProducts);

    // Calculate total pages
    setTotalPages(Math.ceil(tempProducts.length / itemsPerPage));
  }, [filters, searchTerm, sort, products, itemsPerPage]);

  // Products for current page
  const currentPageProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        setFilters,
        sort,
        setSort,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        itemsPerPage,
        currentPageProducts, // Products for the current page
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
