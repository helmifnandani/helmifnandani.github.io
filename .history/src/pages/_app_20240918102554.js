import "tailwindcss/tailwind.css";
import { Space_Mono } from "next/font/google";

const gothic = Space_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

function App({ Component, pageProps }) {
  return (
    <main className={gothic.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
