import "tailwindcss/tailwind.css";
import { Space_Mono } from "next/font/google";

const gothic = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

function App({ Component, pageProps }) {
  return (
    <main className={`${gothic.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
