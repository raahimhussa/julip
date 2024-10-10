import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#E1E5FF', // Light blue background
  borderRadius: '15px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '20px',
}));

const ComparisonBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white', // White background for the comparison boxes
  borderRadius: '10px',
  padding: '20px',
  width: '100%', // Full width for small screens
  maxWidth: '500px', // Maximum width for larger screens
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '10px',
}));

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
});

const ComparisonSection = () => {
  return (
    <Container>
      <Title>Stand out with <span style={{ color: '#6BCB6D' }}>your website</span></Title>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', width: '100%' }}>
        <ComparisonBox>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Before Julip</Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>😟 You’re blending in with a generic looking website.</li>
            <li>😩 Crawling frustration with the complicated set up process.</li>
            <li>🤷 You abandon your website because it’s hard to navigate.</li>
            <li>❓ You can’t and won’t provide important details about your services.</li>
            <li>🔄 You need to answer each question via DM instead of FAQs.</li>
            <li>🗂️ You can add plain links that won’t grab your audience’s attention.</li>
            <li>📜 Basic templates that you can only partially customize.</li>
          </ul>
        </ComparisonBox>

        <ComparisonBox>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>After Julip</Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>✨ You stand out from the crowd with a professional website.</li>
            <li>🚀 You get the website up and running in just a few minutes.</li>
            <li>🎨 An easy-to-use design that saves you time and effort.</li>
            <li>🤑 You’ll generate more leads and get more clients.</li>
            <li>🔍 Quickly answer your clients’ most pressing questions and remove guessing games.</li>
            <li>💼 You have your own visual branding to stand out online.</li>
            <li>🛠️ Plug and play clean templates that you can customize to fit your brand aesthetics.</li>
          </ul>
        </ComparisonBox>
      </Box>

      <Button variant="contained" sx={{ backgroundColor: '#DCFFBA', color: '#3B5E54', textTransform: 'none', marginTop: '20px' }}>
        Start today for free
      </Button>
    </Container>
  );
};

export default ComparisonSection;
