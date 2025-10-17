import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Bennett Taylor',
  description: 'A portfolio showcasing the work of Bennett Taylor',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-stone-50 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}