# Product Listing Page

This project is a simple **Product Listing Page** that displays a list of products and allows users to filter and search through them. It is built with **React** for the frontend and **Node.js** for the backend.

## Features

- **Product Listing**: Displays products with details such as name, price, and rating.
- **Search**: Users can search for products by name.
- **Filter**: Filter products by category, price range, rating, and availability.
- **Sorting**: Sort products by price or rating.
- **Pagination**: Displays products in a paginated format.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express 
- **Database**: json file
- **State Management**: React Context API
- **Package Manager**: npm or yarn

## Getting Started

### Prerequisites

Before running the application, ensure that you have the following installed on your local machine:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm**: npm is installed automatically with Node.js. You can verify its installation by running `npm -v` in the terminal.


# Installation

## 1. Clone the Repository
```bash
git clone https://github.com/shubhamghadge20/Product-Listing-Page.git
```

## 2. Navigate to the Project Directory
```bash
cd product-listing-page
```
## 3. For Run backend

 ```bash
cd backend
```
 ```bash
npm install
```
 ```bash
node server.js
```

## 4. For run frontend

 ```bash
cd frontend
```
 ```bash
npm install
```
 ```bash
npm start
```
## File Structure
```bash
/project-root
  /backend
    server.js          # Mock API server
    data.json          # JSON file storing product data
  /frontend/src
    /components
      ProductCard.js   # Displays a single product card
      FilterSidebar.js # Filtering sidebar component
      SortingBar.js    # Sorting dropdown component
      Pagination.js    # Pagination controls
      ProductGrid.js
      SearchBar.js     #search product 
    /context
      ProductContext.js # Context provider for product state management
    App.js             # Main application component
    index.js           # Entry point for the React app
  package.json
```
