'use client';

import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <h1>This is Home Page</h1>
      <Link href="/products">
        <Button className="my-4 mr-4">Products</Button>
      </Link>
      <Link href="/products/1">
        <Button className="my-4">Product details</Button>
      </Link>
    </>
  )
}
