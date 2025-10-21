import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import { Roboto_Slab, Chicle, Playfair, Tinos } from 'next/font/google';

export const metadata = {
  title: 'Bennett Taylor',
  description: 'A portfolio showcasing the work of Bennett Taylor',
}

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

const chicle = Chicle({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chicle',
});

const playfair = Playfair({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const tinos = Tinos({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${chicle.variable} ${playfair.variable} ${tinos.variable} bg-gradient-to-t from-lightgreen to-black`}>
      <body>
        <div className="relative isolate flex flex-col min-h-screen bg-[url(/background.jpg)]">
          <div className="absolute inset-0 backdrop-blur-xs" aria-hidden="true" />
          <div className="relative z-10 flex flex-col flex-grow">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}