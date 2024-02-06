import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./storeProvider";
import Footer from "./components/footer";
import { Box } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "eshop",
  description: "eshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Box sx={{ backgroundColor: "rgb(241,242,244)" }}>
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
          </Box>
        </StoreProvider>
      </body>
    </html>
  );
}
