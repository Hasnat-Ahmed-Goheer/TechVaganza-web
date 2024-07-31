import theme from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLayout from '@/components/Header/NavbarLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavbarLayout>
              {children}
            </NavbarLayout>
           </ThemeProvider>
           </AppRouterCacheProvider>
       </body>
     </html>
  );
}
