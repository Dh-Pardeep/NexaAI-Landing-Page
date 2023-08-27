import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HandAI from '../assets/image/png/handAI.png'
const NexAIToken = () => {
    return (
        <>
            <section id="my_scroll">
                <Container>
                   <div className='mt-lg-5'>
                   <h3 className='ff_Recharge fw-bold font_3xl text_green text-center mt-5 py-5 '>NexAI Token & utility</h3>
                   </div>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <img className='w-100' src={HandAI} alt="" />
                        </Col>
                        <Col lg={6} className='mt-5'>
                            <div className='Tokens_boxScroll   position-relative overflow-scroll'>
                                <div className= 'Left_line position-relative'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Purchasing Nexai Products</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                                    </div>
                                </div>
                                <div className='  Left_line position-relative mt-5 pt-xl-4'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Accessing Exclusive Content</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.</p>
                                    </div>
                                </div>
                                <div className=' Left_line position-relative mt-5 pt-xl-4'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Loyalty and Rewards</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.</p>
                                    </div>
                                </div>
                                <div className='  Left_line position-relative mt-5 pt-xl-4'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Participating in Governance</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms, token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements, and actively contribute to shaping the future development and direction of the Nexai ecosystem.</p>
                                    </div>
                                </div>
                                <div className='  Left_line position-relative mt-5 pt-xl-4'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Peer-to-Peer Transactions</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.</p>
                                    </div>
                                </div>
                                <div className='  Left_line_last position-relative mt-5 pt-xl-4'>
                                    <div className='ps-5 ms-sm-5 cricel_left position-relative'>
                                        <h2 className='font_xl text_white fw-bold ff_Recharge'>Token Staking and Rewards</h2>
                                        <p className='opacity_7 text_white font_xs fw-normal ff_Poppins mt-3'>Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NexAIToken