import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

//@ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
