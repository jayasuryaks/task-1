import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import Navbar from './components/Navbar';
import myImage from './assets/img.svg';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
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
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#fff',
          }}
        >
          <Typography variant="h3" color="#526a6e" sx={{ textAlign: 'center', px: 4, mb: 3 }}>
            Welcome to your professional network
          </Typography>
          <Box sx={{ width: '100%', maxWidth: 400, bgcolor: '#fff', p: 4, borderRadius: 2 }}>
            <Typography variant="h6" color="#0077b5" sx={{ mb: 2, textAlign: 'center' }}>
              Sign in with email
            </Typography>
            <Button 
              variant="outlined" 
              fullWidth 
              sx={{ 
                mb: 2, 
                borderRadius: 8,
                borderColor: '#ddd',
                color: '#333',
                textTransform: 'none',
                fontSize: '16px',
                py: 1.5,
                '&:hover': {
                  borderColor: '#ccc',
                  backgroundColor: '#f8f9fa'
                }
              }}
              endIcon={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f5f5f5',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    p: 1.2,
                    ml: 1,
                  }}
                >
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google" 
                    style={{ width: '18px', height: '18px' }}
                  />
                </Box>
              }
            >
              Continue with Google
            </Button>
            <Button 
              variant="outlined" 
              fullWidth 
              sx={{ 
                mb: 2, 
                borderRadius: 8,
                borderColor: '#ddd',
                color: '#333',
                textTransform: 'none',
                fontSize: '16px',
                py: 1.5,
                '&:hover': {
                  borderColor: '#ccc',
                  backgroundColor: '#f8f9fa'
                }
              }}
              endIcon={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f5f5f5',
                    border: '1px solid #eee',
                    borderRadius: '50%',
                    p: 1.2,
                    ml: 1,
                  }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                    alt="Microsoft" 
                    style={{ width: '18px', height: '18px' }}
                  />
                </Box>
              }
            >
              Continue with Microsoft
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
              By clicking Continue to join or sign in, you agree to LinkedIn's <Link href="#" underline="hover">User Agreement</Link>, <Link href="#" underline="hover">Privacy Policy</Link>, and <Link href="#" underline="hover">Cookie Policy</Link>.
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              New to LinkedIn?{' '}
              <Link href="#" underline="hover" color="primary">
                Join now
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#fff',
          }}
        >
          <img
            src={myImage}
            alt="Professional network illustration"
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;