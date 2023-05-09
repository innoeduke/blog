import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "./components/header";

const nunito = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "PlayGram Captain",
  description: "A personal blog created all for fun & study.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
