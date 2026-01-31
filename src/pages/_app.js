import "@/styles/globals.css";
import Navigation from "@/components/navigation/Navigation";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}
