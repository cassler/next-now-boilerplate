import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  bgray0: '#ebf0f9',
  bgray1: '#e1e9f6',
  bgray2: '#d3d7dc',
  bgray3: '#c7c9cc',
  bgray4: '#babdc2',
  bgray5: '#99a0ac',
  bgray6: '#717b8e',
  bgray7: '#3c4454',
  bgray8: '#293340',
  bgray9: '#282c34',
  fontFamilySystem:
    'Calibre, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export const DocumentContainer = styled.div`
  font-family: Calibre, sans-serif;
`;

export const DocumentContent = styled.div``;

export const GlobalStyle = createGlobalStyle`
  body,html {
    font-family: ${theme.fontFamilySystem}
  }
  @font-face {
    font-family: Calibre;
    font-weight: 200;
    src: url("./static/fonts/calibre200.woff") format("woff");
  }
  @font-face {
    font-family: "Calibre";
    src: url("./static/fonts/calibre_light-a800b0e856e285c47e46c1f2b977d6d00042011086a0f0526b2832c0f2023a23.woff") format("woff"),
    url("./static/fonts/calibre_light-492c0bbdc4fb2fda6a8ca4c489236731034ce1c1d40e6194bcb8a220d6a160da.woff2") format("woff2"),
    url("./static/fonts/calibre_light-9e4beacab60ca9c8ab3c899e2f9e0161d373e900541480d9d56942603d9aa774.eot") format("eot");
    font-style: normal;
    font-weight: 300
}
@font-face {
    font-family: "Calibre";
    src: url("./static/fonts/calibre_light_italic-d095580c1cfe663ac123383edd2dc8f66005504c03526a2fce51e3fd28f16597.woff") format("woff"),
    url("./static/fonts/calibre_light_italic-41573c23e18d65528a23d3ad8e4fdcafe3c07075ba446e3812d7240b86437c10.woff2") format("woff2"),
    url("./static/fonts/calibre_light_italic-d9ca3936c3868ac3110cc828fd07583569124eaf285ae29cddf4c053b1eec03f.eot") format("eot");
    font-style: italic;
    font-weight: 300
}
  @font-face {
    font-family: Calibre;
    font-weight: 200;
    font-style:italic;
    src: url("./static/fonts/calibre200italic.woff") format("woff");
  }
  @font-face {
    font-family: Calibre;
    font-weight: 400;
    src: url("./static/fonts/Calibre-R-Regular.woff2") format("woff2"),
      url("./static/fonts/Calibre-R-Regular.woff2") format("woff");
  }
  @font-face {
    font-family: Calibre;
    font-weight: 500;
    src: url("./static/fonts/Calibre-R-Medium.woff2") format("woff2"),
      url("./static/fonts/Calibre-R-Medium.woff2") format("woff");
  }
  @font-face {
    font-family: Calibre;
    font-weight: 700;
    src: url("./static/fonts/Calibre-R-Semibold.woff2") format("woff2"),
      url("./static/fonts/Calibre-R-Semibold.woff2") format("woff");
  }
  @font-face {
    font-family: "Calibre";
    src: url("./static/fonts/calibre_black-bd329df5ad874cb2f6d3516e1235dcfa831b364a7ffc090eb3fb296d02d8e3e8.woff") format("woff"),
    url("./static/fonts/calibre_black-f3545a8a42348b9dc49c611f9d95bee9fe0d15aa411ecadb127b67b349c5e1ff.woff2") format("woff2"),
    url("./static/fonts/calibre_black-087f7b1e8c5e636015dba530566461ae9b50774ff1bfe7c2ed8a74a175d1e1cc.eot") format("eot");
    font-style: normal;
    font-weight: 900
}
@font-face {
    font-family: "Calibre";
    src: url("./static/fonts/calibre/black_italic/calibre_black_italic-c169317f364059acfaae7a11def41bc29955db01c4d14efc322b8a281765dbc1.woff") format("woff"),
    url("./static/fonts/calibre/black_italic/calibre_black_italic-7daa5835a65905ba93492cd4861004a61d756e5b255789bae9634faeb6510739.woff2") format("woff2"),
    font-style: italic;
    font-weight: 900
}
  @font-face {
    font-family: CalibreTab;
    font-weight: 400;
    src: url("./static/fonts/Calibre-R-Tab-Medium.woff2") format("woff2"),
      url("./static/fonts/Calibre-R-Tab-Medium.woff2") format("woff");
  }
`;
