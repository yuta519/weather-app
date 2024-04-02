import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SunIcon } from "@/app/weather/components/Icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='p-4 border-b'>
          <div className='container mx-auto'>
            <div className='flex items-center gap-4'>
              <SunIcon className='w-8 h-8 text-amber-500' />
              <h1 className='text-2xl font-semibold'>Weather</h1>
            </div>
          </div>
        </header>

        <div className='flex flex-col min-h-screen'>{children}</div>
        <footer className='p-4 border-t'>
          <div className='container mx-auto text-center text-sm text-gray-500 dark:text-gray-400'>
            <p>
              Powered by the OpenWeather API. Background images from Unsplash.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
