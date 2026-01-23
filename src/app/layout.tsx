import Head from "next/head";

import { Poppins } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { AppThemeProvider } from "@/providers/theme-provider";
import { MainLayout } from "@/components/app-layouts/main";
import "./global.css";

const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<IRootLayoutProps>) {
  const { children } = props;

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180" />
      </Head>

      <AppRouterCacheProvider>
        <body suppressHydrationWarning={true} className={poppinsFont.variable}>
          <AppThemeProvider>
            <MainLayout>{children}</MainLayout>
          </AppThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
