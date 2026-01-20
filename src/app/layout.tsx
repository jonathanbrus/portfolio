import { Poppins } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
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
      <AppRouterCacheProvider>
        <body suppressHydrationWarning={true} className={poppinsFont.variable}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
