import Link from 'next/link'
import React from 'react'
import Button from './components/button'

const NotFound = () => {
  return (
    <>
      <h1>404 page</h1>
      <Link href="/">
        <Button className="my-4">HOME</Button>
      </Link>
    </>
  )
}

export default NotFound