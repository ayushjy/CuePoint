import React from 'react'
import Link from 'next/link'

const Headerpage = () => {
  return (
    <div>
      <header>
        <div>
        <div className='top-nav'>
          <div className="logo">
          <img src='/logo_black.png' alt='logo' width={50} height={50} />
          </div>
        <nav>
            <ul>
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>
              <Link href="/events">Events</Link>
              </li>
              <li>
              <Link href="/about-us">About us</Link>
              </li>
            </ul>    
        </nav>
        </div>
        <p className='title'>Get All Information About Events In Your City</p>
        </div>
      </header>
    </div>
  )
}

export default Headerpage