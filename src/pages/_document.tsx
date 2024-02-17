import { ThemeProvider } from "next-themes";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Calculadora de Calorias</title>
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="white"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="black"
      />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
