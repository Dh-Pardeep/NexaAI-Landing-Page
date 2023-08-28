import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NexAIPhoto from '../assets/image/png/AIPhoto.png'
import { Link } from 'react-router-dom'
const WhatIsNexAi = () => {
    return (
        <>
            <section>
                <div className=' py-lg-5'>
                    <div className='NexAi_box_one mx-auto mt-5 position-relative overflow-hidden'>
                        <div className=' NexAiShadow_1 position-absolute '></div>
                        <div className=' NexAiShadow_2 position-absolute'></div>
                        <Container>
                            <Row className='align-items-center '>
                                <Col lg={7}>
                                    <div className='position-relative z-3'>
                                        <h2 className='ff_Recharge fw-bold font_3xl text_green mt-5'>What is NexAi?</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins AIPowered_para_w'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                                        <Link href='#' className=' mt-3 mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer mb-5'>Learn More</Link>
                                    </div>
                                </Col>
                                <Col lg={5} className='d-flex justify-content-center align-items-center mt-5'>
                                    <img className='w-75 z-3 position-relative mb-5 mb-lg-0' src={NexAIPhoto} alt="NexAIPhoto" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatIsNexAi