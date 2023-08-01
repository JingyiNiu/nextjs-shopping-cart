"use client";

import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-bold uppercase">Home Page</h1>
      <div className="mt-8">
        <p className="mb-8">
          The following links are both implementing the same function: displaying
          data and adding items to the cart.
        </p>

        <p>
          The difference is that the <Link href="/products">
          <Button>Products</Button>
        </Link> fetches data on the server
        </p>
        

        <p className="mt-8">while the <Link href="/products/1">
          <Button>Product details</Button>
        </Link> page fetches data on the client</p>
        <p className="text-xs">(* this page may or may not broke when reloading, I'm trying to figure it out. Good luck to me!✌️)</p>
        
      </div>
    </>
  );
}
