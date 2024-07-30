"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";
import { FaHeadset } from "react-icons/fa";

import {
  IoPeopleOutline,
  IoBulbOutline,
  IoBookOutline,
  IoFitnessOutline,
} from "react-icons/io5";

const Values = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative valuesSection">
      <div className="items-center w-full mx-auto max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-16 ss:mb-8 
            mb-16">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            Our values
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
            <div className="valuesContainer">
              <div className="value">
                <FaHeadset size={40} />
                <h1>Strong Customer Service</h1>
                <p>
                  At Proxy, outstanding customer service is our priority. We are
                  dedicated to providing personalized support and addressing
                  your needs promptly. Your satisfaction is our ultimate goal.
                </p>
              </div>
              <div className="value">
                <IoPeopleOutline size={40} />
                <h1>Collaboration</h1>
                <p>
                  Effective collaboration fuels our success. Our team works
                  closely with you, blending diverse skills and ideas to achieve
                  shared goals. Together, we turn your vision into reality.
                </p>
              </div>
              <div className="value">
                <IoBulbOutline size={40} />
                <h1>Innovation</h1>
                <p>
                  Innovation is our driving force. We continuously explore new
                  solutions and creative approaches to stay ahead. By embracing
                  change, we deliver advanced and effective results.
                </p>
              </div>
              <div className="value">
                <IoBookOutline size={40} />
                <h1>Education (Industry Knowledge)</h1>
                <p>
                  We prioritize continuous learning and industry knowledge. Our
                  team stays current with trends and best practices to provide
                  you with accurate insights. Empowering you with the latest
                  expertise is our mission.
                </p>
              </div>
              <div className="value">
                <IoFitnessOutline size={40} />
                <h1>Indomitable Spirit (Tenacity)</h1>
                <p>
                  Our indomitable spirit drives us forward. With unwavering
                  tenacity, we tackle challenges and push through obstacles to
                  achieve success. We are committed to delivering exceptional
                  results, no matter the difficulty.
                </p>
              </div>
              <div className="value"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Values, "values");
