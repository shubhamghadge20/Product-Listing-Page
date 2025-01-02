import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Rating, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductCard = ({ product }) => {
  const CardStyled = styled(Card)(({ theme }) => ({
    width: 300, // Set fixed width for uniformity
    height: 420, // Slightly adjusted height for improved layout
    margin: theme.spacing(2),
    borderRadius: 12, // Rounded corners for a modern look
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-8px)', // Slight lift on hover for a 3D effect
    },
  }));

  const MediaStyled = styled(CardMedia)(() => ({
    height: 220, // Consistent height for images
    objectFit: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    transition: 'transform 0.3s ease', // Smooth transition on hover
    '&:hover': {
      transform: 'scale(1.05)', // Image zoom on hover
    },
  }));

  const CardContentStyled = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  }));

  const TitleStyled = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    marginBottom: theme.spacing(1),
    fontSize: '1.1rem',
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }));

  const PriceStyled = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  }));

  const ButtonStyled = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(1, 2),
    borderRadius: '20px', // Rounded button for a softer look
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Hover shadow effect for buttons
    },
  }));

  const RatingStyled = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  }));

  return (
    <CardStyled>
      <MediaStyled component="img" image={product.image} alt={product.name} />
      <CardContentStyled>
        <Box>
          <TitleStyled variant="h6">{product.name}</TitleStyled>
          <PriceStyled>₹{product.price}</PriceStyled> {/* INR symbol */}
        </Box>
        <Box>
          <RatingStyled>
            <Rating value={product.rating} readOnly />
          </RatingStyled>
          <ButtonStyled variant="contained">Add to Cart</ButtonStyled>
        </Box>
      </CardContentStyled>
    </CardStyled>
  );
};

export default ProductCard;
