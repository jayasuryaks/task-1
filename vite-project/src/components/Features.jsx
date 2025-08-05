import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import myImage from '../assets/img.svg';

function Features() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        bgcolor: '#f0f2f5',
        height: 'calc(100vh - 64px)',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          px: { xs: 4, md: 16 },
          py: 10,
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'normal',
            lineHeight: 1.2,
            mb: 6,
            color: '#526a6e',
            textAlign: 'left'
          }}
        >
          Welcome to your <br /> professional network
        </Typography>

        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#1976d2',
            color: 'white',
            px: 8,
            py: 2,
            borderRadius: 50,
            width: '100%',
            maxWidth: '384px',
            mb: 4,
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
            style={{ width: 24, height: 24 }}
          />
          Continue with Google
        </Button>

        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #e0e0e0',
            borderRadius: 28,
            px: 4,
            py: 3,
            width: '100%',
            maxWidth: '384px',
            mb: 4,
            boxShadow: 1,
            bgcolor: 'white',
            color: 'black',
            '&:hover': { bgcolor: '#f5f5f5' }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <img
              src="https://i.pravatar.cc/300"
              alt="User"
              style={{ width: 32, height: 32, borderRadius: '50%' }}
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Continue as
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: '#666' }}>
                Abcd@gmail.com
              </Typography>
            </Box>
          </Box>
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
            alt="Microsoft"
            style={{ width: 20, height: 20 }}
          />
        </Button>

        <Button
          variant="outlined"
          sx={{
            px: 6,
            py: 3,
            borderRadius: 28,
            width: '100%',
            maxWidth: '384px',
            mb: 6,
            '&:hover': { bgcolor: '#f5f5f5' }
          }}
        >
          Sign in with email
        </Button>
      </Box>
      
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#ffffff',
        }}
      >
        <img
          src={myImage}
          alt="Professional network illustration"
          style={{ 
            maxWidth: '80%', 
            maxHeight: '80%',
            objectFit: 'contain'
          }}
        />
      </Box>
    </Box>
  );
}

export default Features;