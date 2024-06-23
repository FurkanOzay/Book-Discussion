import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../components/NavBar';

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