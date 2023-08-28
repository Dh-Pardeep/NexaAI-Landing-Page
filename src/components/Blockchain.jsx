import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import ImageP1 from '../assets/image/png/pantagun_bg.png'
import BlockchainShadowIMg from '../assets/image/png/B;lockchainShadowImg.png'
const Blockchain = () => {
    var settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className=' position-relative overflow-hidden'>
                <div className=' BlockchainShadow_1 position-absolute '></div>
                <div className=' BlockchainShadow_2 position-absolute'></div>
         
                <img className='position-absolute end-0' src={BlockchainShadowIMg} alt="" />
                <h2 className="text_green font_3xl ff_Recharge fw-bold mb-0 mb-3 text-center pt-5 mt-3">
                    Blockchain & AI technology
                </h2>
                <p className="opacity_7 text_white font_xs fw-normal ff_Poppins BlockchainPara  mx-auto text-center ">
                    Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.
                </p>
                <div className='mt-5'>
                    <p className=" text_white font_xs fw-bold ff_Recharge BlockchainPara_2 mx-auto text-center py-5">
                        By building the software on blockchain, Nexai provides the following advantages
                    </p>
                </div>
                <Slider {...settings} className='pt-5 pb-lg-5 ps_150px'>
                    <div>
                        <div className='position-relative d-inline-block c_pointer'>
                            <img className='w-100' src={ImageP1} alt="ImageP1" />
                            <div className='position-absolute translate-middle start-50 top_box_security w-100 pt-5'>
                                <h2 className='font_2xl ff_Recharge text_white fw-bold One_border d-inline-block accordion-body d-flex align-items-center justify-content-center mx-auto'>1</h2>
                                <p className='font_lg ff_Recharge text_white fw-bold Securitypara text-center mt-5 mx-auto'>Security and Privacy</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className='position-relative d-inline-block  my-5 c_pointer'>
                            <img className='w-100' src={ImageP1} alt="ImageP1" />
                            <div className='position-absolute translate-middle start-50 top_box_security w-100 pt-5'>
                                <h2 className='font_2xl ff_Recharge text_white fw-bold One_border d-inline-block accordion-body d-flex align-items-center justify-content-center mx-auto'>2</h2>
                                <p className='font_lg ff_Recharge text_white fw-bold Securitypara text-center mt-5 mx-auto'>Transparent and Reliable Data Management</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='position-relative d-inline-block c_pointer'>
                            <img className='w-100' src={ImageP1} alt="ImageP1" />
                            <div className='position-absolute translate-middle start-50 top_box_security w-100 pt-5'>
                                <h2 className='font_2xl ff_Recharge text_white fw-bold One_border d-inline-block accordion-body d-flex align-items-center justify-content-center mx-auto'>3</h2>
                                <p className='font_lg ff_Recharge text_white fw-bold Securitypara text-center mt-5 mx-auto'>Self-learning and Personalization</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className='position-relative d-inline-block my-5 c_pointer'>
                            <img className='w-100' src={ImageP1} alt="ImageP1" />
                            <div className='position-absolute translate-middle start-50 top_box_security w-100 pt-5'>
                                <h2 className='font_2xl ff_Recharge text_white fw-bold One_border d-inline-block accordion-body d-flex align-items-center justify-content-center mx-auto'>4 </h2>
                                <p className='font_lg ff_Recharge text_white fw-bold Securitypara text-center mt-5 mx-auto'>Automated and Transparent Transactions</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Blockchain
