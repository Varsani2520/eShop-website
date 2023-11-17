import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "@/component/AuthProvider/AuthProvider";
import {StoreProvider} from './storeProvider'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "eShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>

          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
