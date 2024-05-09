import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YTDownloader",
  description: "by James Joseph Vilca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center gap-x-4 p-4">
          <img src="yt-logo.png" className="w-20" alt="" />
          <p>YTDOWNLOADER</p>
        </div>
        {children}
      </body>
    </html>
  );
}
