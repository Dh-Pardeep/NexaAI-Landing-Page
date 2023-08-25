import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import ImageP1 from '../assets/image/png/pantagun_bg.png'
const Blockchain = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section>
                <Container>
                    <h2 className="text_green font_3xl ff_Recharge fw-bold mb-0 mb-3 text-center pt-5">
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
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Blockchain
