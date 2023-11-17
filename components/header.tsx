import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        Logo
      </div>
      <Link href="/about">
        About
      </Link>
      <Link href="/contacts">
        Contacts
      </Link>
    </header>
  )
}
