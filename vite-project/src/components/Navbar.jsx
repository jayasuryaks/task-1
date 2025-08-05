import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbar Component
function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'white',
        boxShadow: 1,
        width: '100vw',
        maxWidth: '100%',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography variant="h4" sx={{ color: '#0077b5', display: 'flex', alignItems: 'center', gap: 1 }}>
            Linked <i className="fab fa-linkedin"></i>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fa-solid fa-rocket" style={{ marginRight: 8 }}></i> Top Content
            </Button>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fas fa-users" style={{ marginRight: 8 }}></i> People
            </Button>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fas fa-graduation-cap" style={{ marginRight: 8 }}></i> Learning
            </Button>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fas fa-briefcase" style={{ marginRight: 8 }}></i> Jobs
            </Button>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fa-solid fa-puzzle-piece" style={{ marginRight: 8 }}></i> Games
            </Button>
            <Button sx={{ color: 'text.secondary' }}>
              <i className="fa-solid fa-laptop" style={{ marginRight: 8 }}></i> Get the app
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: '#0077b5',
              borderColor: '#0077b5',
              borderRadius: 28,
              px: 3,
            }}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#0077b5',
              borderRadius: 28,
              px: 3,
            }}
          >
            Join now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;