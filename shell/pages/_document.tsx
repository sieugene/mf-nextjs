import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    console.log("tyt", process.env.HOST_SERVICE_APP1);

    return (
      <Html>
        <script
          src={`${process.env.HOST_SERVICE_APP1}/_next/static/runtime/app1RemoteEntry.js`}
        />
        <script
          src={`${process.env.HOST_SERVICE_APP2}/_next/static/runtime/app2RemoteEntry.js`}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
