import React from 'react'
import Slider from "react-slick";
const NexAIThreeSlider = () => {
    var settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 4.8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        // rtl: true,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
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
    var settingsTwo = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 4.8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        rtl: true,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
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
            <section className='position-relative'>
            <div className='  NexAidoesShadow_3 position-absolute'></div>
                <h2 className="text_green font_3xl ff_Recharge text_white fw-bold mt-lg-4 mb-3 text-center">
                    NexAi does all this. And more.
                </h2>
                <p className="opacity_7 text_white font_xs fw-normal ff_Poppins NexAIThreeSliderPara  mx-auto text-center mb-5 pb-4">
                    Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.
                </p>
                <Slider {...settings}>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on light</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, set
                                alarm of 5:00 am</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, measure this table</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on light</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, set
                                alarm of 5:00 am</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, measure this table</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                </Slider>
                <Slider {...settingsTwo}>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, measure this table</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on light</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, is the front door locked?</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, measure this table</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on light</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, is the front door locked?</h2>
                        </div>
                    </div>
                </Slider>
                <Slider {...settings} className='pb-5'>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on TV</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn of AC.</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Lock
                                the front door</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4" >
                        <div className='Three_slider_box  d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on TV</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn on music</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Turn of AC.</h2>
                        </div>
                    </div>
                    <div className="py-4 ps-4">
                        <div className='Three_slider_box d-flex justify-content-center align-items-center c_pointer '  data-aos="zoom-in" data-aos-delay="500">
                            <h2 className='ff_Recharge font_lg text_white Three_Slider_box_h2 text-center mx-auto'>NexAi, Lock
                                the front door</h2>
                        </div>
                    </div>
                </Slider>
            </section >
        </>
    )
}

export default NexAIThreeSlider