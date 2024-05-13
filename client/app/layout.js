import "./globals.css";
import { Roboto } from 'next/font/google'
import Link from "next/link"; 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata = {
  title: "YTDownloader",
  description: "by James Joseph Vilca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
        <div className=" p-4 flex justify-center">
          <Link href="/" alt="home" className="flex justify-center items-center gap-x-4 max-w-md">
            <img src="yt-logo.png" className="w-20" alt="" />
            <p>YTDOWNLOADER</p>
          </Link>
        </div>
        
        {children}
      </body>
    </html>
  );
}
