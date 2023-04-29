import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* mailchimp script */}
          <script
            type="text/javascript"
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `setTimeout(() => {
                !(function (c, h, i, m, p) {
                  (m = c.createElement(h)),
                    (p = c.getElementsByTagName(h)[0]),
                    (m.async = 1),
                    (m.src = i),
                    p.parentNode.insertBefore(m, p);
                })(
                  document,
                  "script",
                  "https://chimpstatic.com/mcjs-connected/js/users/${process.env.NEXT_PUBLIC_MAILCHIMP_USER_ID}/${process.env.NEXT_PUBLIC_MAILCHIMP_ID}.js"
                );
                document.cookie =
                  "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie =
                  "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              }, 5000);`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
