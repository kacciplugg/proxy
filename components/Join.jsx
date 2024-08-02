"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";

const Join = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative joinSection">
      <div className="items-center w-full mx-auto max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-16 ss:mb-8 
            mb-16">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            Want to join the team?
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
            <div className="joinContainer">
              <div className="joinText">
                <p>
                  Join our dynamic, team and unleash your full earning potential
                  in a company that's revolutionizing real estate. Our
                  cutting-edge technology ensures you’re always ahead of the
                  curve, and our lucrative referral program offers additional
                  income opportunities. Don't just work in real estate—thrive in
                  it. Join us today and transform your career!
                </p>
              </div>
              <a href="/join">
                <button
                  className="grow4 bg-custom-gradient buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-24 ss:px-3 px-3 text-white 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer">
                  Join Us
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Join, "join");
