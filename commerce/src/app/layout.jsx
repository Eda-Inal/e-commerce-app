'use client'
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Card from "./card/page";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <Provider store={store}>
        <Providers>
          <Navbar/>
          <Card/>
          {children}
          </Providers>
          </Provider>
      </body>
    </html>
  );
}
