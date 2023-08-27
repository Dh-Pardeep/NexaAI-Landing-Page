import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReadyGetStarted = () => {
    return (
        <>
            <section>
                <Container>
                    <div className='pt-lg-4 pt-xl-5 mt-xl-5'>
                        <div className='mt-md-4 mt-lg-5'>
                            <div className='d-flex align-items-center flex-column flex-md-row justify-content-between py-5 mt-5'>
                                <div>
                                    <h2 className='ff_Recharge fw-bold font_3xl text_white text-center text-md-start'>Ready to get started </h2>
                                    <h3 className='ff_Recharge fw-bold font_3xl text_green text-center text-md-start'>Talk to us Today </h3>
                                </div>
                                <Link href='#' className=' mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer mt-4'>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ReadyGetStarted