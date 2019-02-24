import App, { Container } from 'next/app';
import Head from 'next/head'
import { ThemeProvider } from 'react-jss';

import theme from '../theme';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My first next.js page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}