import React from "react";
import UniqueCenterImg from "../assets/image/png/UniqueCenterImage.png";
import { Realtime, RemoteAccess } from "./common/Icons";
import Slider from "react-slick";
const UniqueFeatures = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
  arrows: false,        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }]
    };
    return (
        <>
            <section id="my_scroll">
                <div className="boxunique mx-auto overflow-y-scroll position-relative z-3">
                    <img
                        className=" position-absolute UniqueCenterImg start-50 translate-middle-x z-n1 w_100 w_sm_unset"
                        src={UniqueCenterImg}
                        alt="UniqueCenterImg"
                    />
                    <h2 className="text_white font_3xl ff_Recharge fw-bold mb-0 mb-3 text-center mt-5">
                        Unique features
                    </h2>
                    <p className="opacity_7 text_white font_xs fw-normal ff_Poppins unique_para_w mx-auto text-center ">
                        ability to engage in natural, fluent conversations in over 15
                        languages,
                    </p>
                    <div className="pt-5 d-none d-md-block">
                        <div className="RemoteAccess_box mt-5 marginleft">
                            <RemoteAccess />
                            <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                Remote Access and File Management
                            </h2>
                            <p className="ff_Poppins font_xs fw-normal text_black">
                                {" "}
                                Imagine you're at work, and you realize you forgot to bring an
                                important file stored on your desktop computer at home. No
                                worries! Simply open the Nexai app on your phone, initiate a
                                call with Nexai, and request access to your computer.{" "}
                            </p>
                        </div>
                        <div className="d-flex justify-content-end marginright RemoteAccess_box_top_translate">
                            <div className="RemoteAccess_box">
                                <Realtime />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Real-time Home Monitoring
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    While you're out with your family, you may wonder if you
                                    remembered to turn off the stove. Thanks to Nexai, this is no
                                    longer a concern. Using the Nexai app, you can initiate a
                                    video call with Nexai and activate the mini drone stationed in
                                    your home.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="RemoteAccess_box RemoteAccess_box_top_translate_2 marginleft">
                            <RemoteAccess />
                            <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                Remote Access and File Management
                            </h2>
                            <p className="ff_Poppins font_xs fw-normal text_black">
                                {" "}
                                Imagine you're at work, and you realize you forgot to bring an
                                important file stored on your desktop computer at home. No
                                worries! Simply open the Nexai app on your phone, initiate a
                                call with Nexai, and request access to your computer.{" "}
                            </p>
                        </div>
                        <div className="d-flex justify-content-end marginright RemoteAccess_box_top_translate_3">
                            <div className="RemoteAccess_box">
                                <Realtime />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Real-time Home Monitoring
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    While you're out with your family, you may wonder if you
                                    remembered to turn off the stove. Thanks to Nexai, this is no
                                    longer a concern. Using the Nexai app, you can initiate a
                                    video call with Nexai and activate the mini drone stationed in
                                    your home.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="d-md-none pt-5">
                        <div>
                            <div className="RemoteAccess_box mx-auto">
                                <RemoteAccess />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Remote Access and File Management
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    Imagine you're at work, and you realize you forgot to bring an
                                    important file stored on your desktop computer at home. No
                                    worries! Simply open the Nexai app on your phone, initiate a
                                    call with Nexai, and request access to your computer.{" "}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="RemoteAccess_box mx-auto">
                                <Realtime />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Real-time Home Monitoring
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    While you're out with your family, you may wonder if you
                                    remembered to turn off the stove. Thanks to Nexai, this is no
                                    longer a concern. Using the Nexai app, you can initiate a
                                    video call with Nexai and activate the mini drone stationed in
                                    your home.{" "}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="RemoteAccess_box mx-auto">
                                <RemoteAccess />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Remote Access and File Management
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    Imagine you're at work, and you realize you forgot to bring an
                                    important file stored on your desktop computer at home. No
                                    worries! Simply open the Nexai app on your phone, initiate a
                                    call with Nexai, and request access to your computer.{" "}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="RemoteAccess_box mx-auto">
                                <Realtime />
                                <h2 className="ff_Recharge fw-bold font_lg text_black mt-4 pt-2 mb-3">
                                    Real-time Home Monitoring
                                </h2>
                                <p className="ff_Poppins font_xs fw-normal text_black">
                                    {" "}
                                    While you're out with your family, you may wonder if you
                                    remembered to turn off the stove. Thanks to Nexai, this is no
                                    longer a concern. Using the Nexai app, you can initiate a
                                    video call with Nexai and activate the mini drone stationed in
                                    your home.{" "}
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default UniqueFeatures;
