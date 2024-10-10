import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#E1E5FF', // Light blue background
  borderRadius: '15px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Image = styled('img')({
  width: '100%',
  maxWidth: '400px', // Adjust based on your design
  marginTop: '20px',
  marginLeft: '0',
});

const ButtonStyled = styled(Button)({
  backgroundColor: '#DCFFBA',
  borderRadius: '15px',
  color: '#3B5E54',
  textTransform: 'none',
  padding: '10px 20px',
  marginTop: '20px',
});

const HeroSection = () => {
  return (
    <Container>
      <Box sx={{ flex: 1, marginRight: { xs: 0, md: 2 } }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Create your <span style={{ color: '#6BCB6D' }}>own website</span> in 5 minutes
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          Drive more sales and build an online presence for your service-based businesses.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Everything you want to share in one place.
        </Typography>
        <ButtonStyled variant="contained">
          Start today for free
        </ButtonStyled>
      </Box>
      <Image src="/Group 119.png"  alt="Mobile view" />
      {/* Replace the src with the actual path of your image */}
    </Container>
  );
};

export default HeroSection;
