import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;