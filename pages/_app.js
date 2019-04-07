import App, { Container } from 'next/app';
import PageWrapper from '../containers/PageWrapper';
import { GlobalStyle } from '../containers/theme';

export default class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return pageProps;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Container>
    );
  }
}
