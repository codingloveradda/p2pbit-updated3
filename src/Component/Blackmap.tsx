
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import blackmap from "../../public/images/page_3/worlmapBlack.jpeg";
import blackmap from "../../public/images/page_3/map.png";
import React, { Component } from "react";
import Slider from "react-slick";


import { RxDotFilled } from "react-icons/rx";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1660,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 668,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="br320:h-[400px] br768:h-[800px]"
        style={{ backgroundImage: `url(${blackmap.src})`, backgroundRepeat: "no-repeat", backgroundSize: "75%", backgroundPosition: "center center" }}>
          <div className=" br768:py-[150px] ">

        <Slider {...settings} >

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-one"></div>
              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
                <div className="icon text-lg absolute br320:top-[-19.6%] br360:left-[25.2%] br480:left-[37.8%] br600:left-[41.8%] br600:top-[-32%] br768:left-[44.2%] br320:left-[22%] br768:top-[-30%]">
                  <RxDotFilled/>
                </div>
                <div className="br320:w-[320px] br360:w-[360px] h-[160px] flex justify-between items-end">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[130px] ">
                    <p className="mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:mb-5 br600:mb-0">
                    <p className="step1 ">01</p>
                  </div>
                  <div className="pr-2 mb-[70px]">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className="br320:w-[200px] text-justify br320:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-two"></div>

              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
                <div className="icon text-lg absolute br320:bottom-[-7%] br360:left-[25.4%] br480:left-[37.8%] br600:left-[42.2%] br600:bottom-[-14%] br320:left-[22.5%] br768:bottom-[-15%] br768:left-[44.2%]">
                  <RxDotFilled /></div>
                <div className="br320:w-[320px] br360:w-[360px] h-[250px] flex justify-between ">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[-20px] self-end">
                    <p className=" mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:h-[40px] br320:w-[40px] mb-4 self-center">
                    <p className="step2">02</p>
                  </div>
                  <div className="pr-2 mt-[140px] card_description">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className=" br320:w-[200px] text-justify br320:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-three"></div>
              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
                <div className="icon text-lg absolute br320:top-[-19.6%] br360:left-[25.2%] br480:left-[37.8%] br600:left-[41.8%] br600:top-[-32%] br768:left-[44.2%] br320:left-[22%] br768:top-[-30%]">
                  <RxDotFilled/>
                </div>
                <div className="br320:w-[320px] br360:w-[360px] h-[160px] flex justify-between items-end">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[130px] ">
                    <p className="mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:mb-5 br600:mb-0">
                    <p className="step1 text-[36px]">03</p>
                  </div>
                  <div className="pr-2 mb-[70px]">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className="br320:w-[200px] text-justify br320:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-four"></div>

              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
              <div className="icon text-lg absolute br320:bottom-[-7%] br360:left-[25.4%] br480:left-[37.8%] br600:left-[42.2%] br600:bottom-[-14%] br320:left-[22.5%] br768:bottom-[-15%] br768:left-[44.2%]">
                  <RxDotFilled /></div>
                <div className="br320:w-[320px] br360:w-[360px] h-[250px] flex justify-between ">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[-20px] self-end">
                    <p className=" mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:h-[40px] br320:w-[40px] mb-4 self-center">
                    <p className="step2">04</p>
                  </div>
                  <div className="pr-2 mt-[140px] card_description">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className=" br320:w-[200px] text-justify br320:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-five"></div>
              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
                <div className="icon absolute br320:top-[-19.6%] br360:left-[25.2%] br480:left-[37.8%] br600:left-[41.8%] br600:top-[-32%] br768:left-[44.2%] br320:left-[22%] br768:top-[-30%]">
                  <RxDotFilled/>
                </div>
                <div className="br320:w-[320px] br360:w-[360px] h-[160px] flex justify-between items-end">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[130px] ">
                    <p className="mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:mb-5 br600:mb-0">
                    <p className="step1 text-[36px]">05</p>
                  </div>
                  <div className="pr-2 mb-[70px]">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className="br320:w-[200px] text-justify br320:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative">
            <div className="absolute br320:top-[15%] br768:top-[30%] left-[0%]">
              <div className="gradint-six"></div>

              <div className="flex justify-center w-[100%] br320:ml-0 br480:ml-10 br600:ml-14">
              <div className="icon text-lg absolute br320:bottom-[-7%] br360:left-[25.4%] br480:left-[37.8%] br600:left-[42.2%] br600:bottom-[-14%] br320:left-[22.5%] br768:bottom-[-15%] br768:left-[44.2%]">
                  <RxDotFilled /></div>
                <div className="br320:w-[320px] br360:w-[360px] h-[250px] flex justify-between ">
                  <div className="pl-2 br768:text-[20px] font-semibold br320:text-[14px] mb-[-20px] self-end">
                    <p className=" mb-1">2020</p>
                    <p>Aug, 1</p>
                  </div>
                  <div className="targets br320:h-[40px] br320:w-[40px] mb-4 self-center">
                    <p className="step2">06</p>
                  </div>
                  <div className="pr-2 mt-[140px] card_description">
                    <h1 className="mb-3 font-semibold br768:text-[24px]">Lorem ipsum</h1>
                    <p className=" br320:w-[200px] text-justify br320:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Slider>
        </div>
      </div>
    );
  }
}