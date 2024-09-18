import "tailwindcss/tailwind.css";
import { Gothic_A1 } from "next/font/google";

const gothic = Gothic_A1({
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
