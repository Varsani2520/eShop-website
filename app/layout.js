"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./storeProvider";
import Footer from "./components/footer";
import { Box, Paper, ThemeProvider, useTheme } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { darkTheme, lightTheme } from "./theme";
import { Suspense, useState } from "react";
import MyBox from "./MyBox";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
  );
  function toggleTheme() {
    isDarkTheme == true ? setDarkTheme(false) : setDarkTheme(true);
    isDarkTheme == true
      ? localStorage.setItem("theme", false)
      : localStorage.setItem("theme", true);
  }

  const theme = useTheme();
  return (
    <html lang="en">
      <body className={inter.className} style={{marginLeft:'auto'}}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <StoreProvider>
            {/* <Paper> */}
            <MyBox>
              <Navbar darkThemeFun={toggleTheme} lightthemFun={toggleTheme} />{" "}
              {/* Pass toggleTheme function as prop */}
              <Suspense fallback={<Loading/>}>
              {children}
              </Suspense>
              <SpeedInsights />
              <Analytics />
              <Footer />
            </MyBox>
            {/* </Paper> */}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
