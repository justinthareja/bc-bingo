import * as React from "react";
import { Layout } from "../components/Layout";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);
      return function cleanupWindow() {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientation", handleResize);
      };
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
