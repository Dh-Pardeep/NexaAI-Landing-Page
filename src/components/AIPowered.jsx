import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AIPoweredImg from '../assets/image/png/AIPowerd.png'
const AIPowered = () => {
    return (
        <section className='position-relative Bg_Color'  >
              <div className='AI_bg_shadow'></div>
            <Container className='py-5'>
                <Row className='justify-content-between align-items-center py-5'>
                    <Col lg={6}>
                        <div className='text-start mb-5 mb-lg-0'>
                            <img className='w-100 z-1 AIPoweredImg' src={AIPoweredImg} alt="AIPoweredImg" />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <h2 className='ff_Recharge fw-bold font_3xl text_green'>Ai-Powered Home Assistant</h2>
                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w mb-4'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <a href='#' className=' mt-4 mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Learn More</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AIPowered