import { Inter } from "next/font/google";
// import './globals.css'
import Navbar from "./components/Navbar";
import { StoreProvider } from "./storeProvider";
import AuthProvider from "@/component/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
