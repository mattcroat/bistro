import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/globals/navbar';
import Footer from '../components/globals/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #262626;
    background: #f2f2f2;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
