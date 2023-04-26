import "@/styles/globals.css";
import Navbar from "../components/Navbar2";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}
