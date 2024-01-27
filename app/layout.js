import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./storeProvider";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "eShop",
  openGraph: {
    title: "eShop",
    description: "e-commerce",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
