"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";
import Slider from "react-slick";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <IoArrowForward size={30} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <IoArrowBack size={30} />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative testimonialSection">
      <div className="items-center w-full mx-auto max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-16 ss:mb-8 
            mb-16">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            What our clients say
          </h1>
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="flex-1 relative items-center justify-center">
            <div className="bg-main w-full h-[2px]" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="w-full">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <div className="testimonialsContainer">
              <Slider {...settings}>
                <div className="testimonial">
                  <div className="testimonialBg">
                    <p>
                      "Buying my first home seemed daunting, but the team at
                      DreamHome Realty made the entire process smooth and
                      stress-free."
                    </p>
                    <hr />
                    <div className="authorInfo">
                      <h3>Sarah Thompson</h3>
                      <p>
                        <FiMapPin /> United States
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonialBg">
                    <p>
                      "Thanks to DreamHome Realty, I found a fantastic apartment
                      quickly and within my budget. Highly recommended!"
                    </p>
                    <hr />
                    <div className="authorInfo">
                      <h3>Rajesh Kumar</h3>
                      <p>
                        <FiMapPin /> India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonialBg">
                    <p>
                      "Proxy provided excellent advice for my first investment
                      property. Their insights were spot on, and I'm thrilled
                      with the outcome!"
                    </p>
                    <hr />
                    <div className="authorInfo">
                      <h3>Emily Wang</h3>
                      <p>
                        <FiMapPin /> Canada
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonialBg">
                    <p>
                      "Proxy's professional approach helped us sell our house
                      quickly and at a great price. Their service exceeded our
                      expectations!"
                    </p>
                    <hr />
                    <div className="authorInfo">
                      <h3>Carlos Gutierrez</h3>
                      <p>
                        <FiMapPin /> Spain
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
