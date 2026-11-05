import Script from "next/script";
import { cookies } from "next/headers";

export const metadata = {
  title: "GDGoC TUP Manila — Build what's next",
  description:
    "Learn, build, and grow with Google Developer Groups on Campus at TUP Manila.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("gdgoc-theme")?.value === "light" ? "light" : "dark";

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
        <link
          id="light-theme-stylesheet"
          rel="stylesheet"
          href="/styles-light.css"
          disabled={theme !== "light"}
        />
      </head>
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
