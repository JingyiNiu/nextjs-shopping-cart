'use client';

import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/products/1">
        <Button className="my-4">Product details</Button>
      </Link>
    </>
  )
}
