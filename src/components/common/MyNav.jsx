import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }
  
  return (
    <>
      <section className='position-fixed  top-0 w-100 z_1000 '>
        <Container >
          <nav className='d-flex justify-content-between align-items-center py_30'>
            <div></div>
            <ul className={`${showNavbar ? 'd-flex align-items-center mb-0 nav_sm p-0 gap_20 Nav_hover ms-lg-5 ms-0' : ' gap_20 d-flex align-items-center mb-0 nav_sm nav_show p-0'} `}>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='text_white position-relative Nav_Btn_hover ms-5 d-inline-block font_xs fw-normal ff_Poppins '>Home</a></li>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='text_white position-relative Nav_Btn_hover d-inline-block font_xs fw-normal ff_Poppins '>Marketplace</a></li>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='text_white position-relative Nav_Btn_hover d-inline-block font_xs fw-normal ff_Poppins '>About</a></li>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='text_white position-relative Nav_Btn_hover d-inline-block font_xs fw-normal ff_Poppins '>Nexchat</a></li>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='text_white position-relative Nav_Btn_hover d-inline-block font_xs fw-normal ff_Poppins '>Tokens</a></li>
              <li><a href='#' onClick={() => setShowNavbar(true)} className='d-lg-none d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Sign Up</a></li>
              <span title="close" className=" close_nav text-white fw-bold d-lg-none  d-inline-block  " href='#' onClick={() => setShowNavbar(true)}><RxCross2 fontSize={40} /></span>
            </ul>
            <ul className=''>
              <li><a href='#' onClick={() => setShowNavbar(true)} className=' d-none d-lg-block mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Sign Up</a></li>
            </ul>
            <span title="open"
              className="d-inline d-lg-none fw-bold text-white"
              onClick={() => setShowNavbar(false)}>
              <RxHamburgerMenu fontSize={40} /></span>
          </nav>
        </Container>
      </section>
    </>
  )
}

export default MyNav