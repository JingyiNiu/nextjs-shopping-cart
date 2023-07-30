'use client'

import Link from 'next/link'
import React from 'react'
import Button from './components/button'

const ErrorPage = () => {
  return (
    <>
      <h1>Error page</h1>
      <Link href="/">
        <Button className="my-4">home</Button>
      </Link>
    </>
  )
}

export default ErrorPage