"use client";

import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-bold uppercase">Home Page</h1>
      <div className="mt-8">
        <p className="mb-8">
          Head to
          <Link href="/products">
            <Button className="mx-2">Products</Button>
          </Link>
          page to view product details and cart function.
        </p>
        <p>This is a Next.js project with TypeScript.</p>
        <p>I choose next.js Next.js due to its suitability for server-side rendering.</p>
        <p>Also I'm using Redux toolkit to manage global state.</p>
        <br />
        <p>For futher usecase, I might use Redux persist to store states in local storage. </p>
        <p>Therefore, even after browser reloading, the states will still be there.</p>
        {/* <p className="mb-8">
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
         */}
      </div>
    </>
  );
}
