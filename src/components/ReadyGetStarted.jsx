import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlockchainShadowIMg from '../assets/image/png/B;lockchainShadowImg.png'
const ReadyGetStarted = () => {
    return (
        <>
            <section className='position-relative' id='Nexchat'>
                <div className=' TokenShadow_1 position-absolute '></div>
                <div className=' GetShadow_2 position-absolute '></div>
                <img className='position-absolute end-0' src={BlockchainShadowIMg} alt="" />
                <Container>
                    <div className='pt-lg-4 pt-xl-5 mt-xl-5'>
                        <div className='mt-md-4 mt-lg-5'>
                            <div className='d-flex align-items-center flex-column flex-md-row justify-content-between py-5 mt-5'>
                                <div data-aos-delay="500" data-aos="fade-right">
                                    <h2 className='ff_Recharge fw-bold font_3xl text_white text-center text-md-start'>Ready to get started </h2>
                                    <h3 className='ff_Recharge fw-bold font_3xl text_green text-center text-md-start'>Talk to us Today </h3>
                                </div>
                                <Link href='#' className=' mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer mt-4' data-aos-delay="500" data-aos="fade-left">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ReadyGetStarted