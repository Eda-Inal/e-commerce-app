'use client';
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Card from "./card/page";
import Alert from "./components/alert";
import Loading from "./components/loading";
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); 
  }, []);


  if (loading) {
    return (
      <html lang="en">
        <body>
          <Loading />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Providers>
            <Alert />
            <Navbar />
            <Card />
            {children}
          </Providers>
        </Provider>
      </body>
    </html>
  );
}
