import Script from "next/script";

export const metadata = {
  title: "GDGoC TUP Manila — Build what's next",
  description:
    "Learn, build, and grow with Google Developer Groups on Campus at TUP Manila.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="styles-light.css" disabled />
      </head>
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
