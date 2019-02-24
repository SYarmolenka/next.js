import Document, { Head, Main, NextScript } from 'next/document';
import { JssProvider, SheetsRegistry } from 'react-jss';

class CustomDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const sheets = new SheetsRegistry()

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => (props) => (
        <JssProvider registry={sheets}>
          <App {...props} />
        </JssProvider>
      ),
    })

    const initialProps = await Document.getInitialProps(ctx)

    return {...initialProps, sheets}
  }
  render() {
    const { sheets } = this.props;
    return (
      <html>
        <Head>
          <style type="text/css" id="server-side-styles">
            {sheets.toString()}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument;
