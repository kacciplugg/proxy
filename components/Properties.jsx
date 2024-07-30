"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { white_stairs, nightstand, hallway, cushion } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";
import { FaMapMarkerAlt, FaDoorOpen } from "react-icons/fa";

const Properties = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative propertiesSection">
      <div
        className="items-center w-full mx-auto flex flex-col 
        max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-12 ss:mb-8 
            mb-8">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            Our properties
          </h1>
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="flex-1 relative items-center justify-center">
            <div className="bg-main w-full h-[2px]" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="flex md:flex-row ss:flex-row flex-col gap-52 w-full propSec">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <div className=" propertyContainer">
              <div className="property">
                <Image src={white_stairs} alt="white stairs" />
                <div className="propertyInfo">
                  <h2>Property 1</h2>
                  <hr />
                  <div className="propLocDist">
                    <p>
                      <FaMapMarkerAlt />
                      Location
                    </p>
                    <p>
                      <FaDoorOpen />
                      160 m2
                    </p>
                  </div>
                </div>
              </div>
              <div className="property">
                <Image src={cushion} alt="white stairs" />
                <div className="propertyInfo">
                  <h2>Property 2</h2>
                  <hr />
                  <div className="propLocDist">
                    <p>
                      <FaMapMarkerAlt />
                      Location
                    </p>
                    <p>
                      <FaDoorOpen />
                      160 m2
                    </p>
                  </div>
                </div>
              </div>
              <div className="property">
                <Image src={nightstand} alt="white stairs" />
                <div className="propertyInfo">
                  <h2>Property 3</h2>
                  <hr />
                  <div className="propLocDist">
                    <p>
                      <FaMapMarkerAlt />
                      Location
                    </p>
                    <p>
                      <FaDoorOpen />
                      160 m2
                    </p>
                  </div>
                </div>
              </div>
              <div className="property">
                <Image src={hallway} alt="white stairs" />
                <div className="propertyInfo">
                  <h2>Property 4</h2>
                  <hr />
                  <div className="propLocDist">
                    <p>
                      <FaMapMarkerAlt />
                      Location
                    </p>
                    <p>
                      <FaDoorOpen />
                      160 m2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="propButton">
              <a href="/properties">
                <button
                  className="grow4 bg-custom-gradient buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-24 ss:px-3 px-3 text-white 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer">
                  See All Properties
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Properties, "properties");
