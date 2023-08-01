"use client";
import React from "react";
import NavCart from "../cart/nav-cart";
import Link from "next/link";
import Button from "../components/button";

const NavBar = () => {
  return (
    <nav className="my-4 bg-gray-100">
      <div className="inside-container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-300 text-sm">HOME</Link>
        <NavCart />
      </div>
    </nav>
  );
};

export default NavBar;
