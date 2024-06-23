import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Book Discussion App
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} href="/register">
            Register
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;