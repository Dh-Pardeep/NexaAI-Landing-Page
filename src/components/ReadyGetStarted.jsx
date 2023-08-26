import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReadyGetStarted = () => {
    return (
        <>
            <section>
                <Container>
                    <div className='d-flex align-items-center flex-column flex-md-row justify-content-between py-5 my-5'>
                    <div>
                        <h2 className='ff_Recharge fw-bold font_3xl text_white text-center text-md-start'>Ready to get started </h2>
                        <h3 className='ff_Recharge fw-bold font_3xl text_green text-center text-md-start'>Talk to us Today </h3>
                    </div>
                    <Link href='#' className=' mb-0 d-inline-block text_black common_btn ff_Recharge fw-bold  font_md c_pointer'>Get Started</Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ReadyGetStarted