import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <>
      <header>
        <Container>
          <nav>
            <div></div>
            <ul className={`${showNavbar ? '' : ''}`}>
              <li><a onClick={() => setShowNavbar(true)} href="#Home">Home</a></li>
              <li><a onClick={() => setShowNavbar(true)} href="#Marketplace">Marketplace</a></li>
              <li><a onClick={() => setShowNavbar(true)} href="#About">About</a></li>
              <li><a onClick={() => setShowNavbar(true)} href="#Nexchat">Nexchat</a></li>
              <li><a onClick={() => setShowNavbar(true)} href="#Tokens">Tokens</a></li>
            </ul>
          </nav>
        </Container>
      </header >
    </>
  )
}

export default MyNav