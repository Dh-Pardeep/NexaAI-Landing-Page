import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyNav from './common/MyNav'

const HeroSection = () => {
  return (
    <>
    <section className='Bg_image_hero bg_image_hero_xs'>
        <div className='position-relative header_shadow'></div>
        {/* <MyNav/> */}
        <Container className=' pt-4'>
            <Row className='pt-5 justify-content-end justify-content-lg-start'>
                <Col md={6} lg={7} className='my-lg-5'>
                <div className='py-lg-5 py-3'>
                    <h1 className='text_white font_4xl ff_Recharge fw-bold mb-0 mb-3 position-relative z-1'><span className='text_green'>Nexai</span> is an advanced AI-powered home assistant</h1>
                    <p className='opacity_7 text_white font_xs fw-normal ff_Poppins pb-md-5'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <a href='#' className='mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Know More</a>
                </div>
                </Col>
            </Row>
        </Container>
        <div className='position-relative header_bottom_shadow'></div>
    </section>
    </>
  )
}

export default HeroSection