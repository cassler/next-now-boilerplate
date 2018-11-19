import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { theme, DocumentContainer, DocumentContent } from '../styled/appStyle';

export default class PageWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <DocumentContainer>
          <Header />
          <Meta />
          <DocumentContent>{children}</DocumentContent>
        </DocumentContainer>
      </ThemeProvider>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.object,
};
