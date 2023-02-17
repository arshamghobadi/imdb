import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <Provider>
          <Header />
          <Navbar />
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
