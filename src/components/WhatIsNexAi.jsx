import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NexAIPhoto from '../assets/image/png/AIPhoto.png'
import { Link } from 'react-router-dom'
const WhatIsNexAi = () => {
    return (
        <>
            <section>
                <div className='NexAi_box_one mx-auto '>
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={7}>
                              <div className='position-relative z-3'>
                              <h2 className='ff_Recharge fw-bold font_3xl text_green'>What is NexAi?</h2>
                                <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                                <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                                <Link href='#' className=' mt-4 mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Learn More</Link>
                              </div>
                            </Col>
                            <Col md={5}>
                                <img className='w-100 z-3 position-relative' src={NexAIPhoto} alt="NexAIPhoto" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default WhatIsNexAi