import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
