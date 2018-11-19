import App, { Container } from 'next/app';
import PageWrapper from '../containers/PageWrapper';

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
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Container>
    );
  }
}
