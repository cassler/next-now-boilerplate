import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  bgray0: '#ebf0f9',
  bgray1: '#e1e9f6',
  bgray2: '#d3d7dc',
  bgray3: '#c7c9cc',
  bgray4: '#babdc2',
  bgray5: '#99a0ac',
  bgray6: '#717b8e',
  bgray7: '#3c5464',
  bgray8: '#293340',
  bgray9: '#282c34',
  fontFamilySystem:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export const DocumentContainer = styled.div`
  
`;

export const DocumentContent = styled.div`
  > div {
    padding: 100px;
    max-width: 35em;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body,html {
    font-family: ${theme.fontFamilySystem};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.bgray7};
  }
  h1,h2,h3,h4,h5,h6 { 
    font-weight: 700;
    line-height: 1.25em;
  }
  h1 { font-weight: 600; }
  h2 { font-weight: 400; }
`;
