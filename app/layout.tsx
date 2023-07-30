"use client";
import "./globals.css";
import Navbar from "./nav/navbar";

import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Provider store={store}>
          <Navbar />
          <main className="inside-container px-4 mx-auto">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
