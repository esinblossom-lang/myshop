export const metadata = { title: "My Shop" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 16 }}>
        {children}
      </body>
    </html>
  );
}
