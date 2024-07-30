"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { streetview } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative aboutSection">
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
            Who are we?
          </h1>
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="flex-1 relative items-center justify-center">
            <div className="bg-main w-full h-[2px]" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="flex md:flex-row ss:flex-row flex-col gap-52 w-full aboutimage">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <p
              className="text-main md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px]  
                    md:leading-[22px]">
              We represent you. It all starts with <b>CUSTOMER SERVICE.</b> Our
              clients and our agents are both customers of Proxy. We believe the
              current real estate practices are broken and out of date. At proxy
              we are reimagining the entire real estate transaction process to
              better serve all parties with high commission splits, innovation,
              and transparency
            </p>

            <p
              className="text-main md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px] 
                    md:mt-5 ss:mt-5 mt-5 md:leading-[22px]">
              We promise to never stop innovating our processes and
              technologies. You need to know market data and trends to
              confidently prepare you to make the best investment and life
              decisions. We are currently experimenting with AI / machine
              learning and blockchain technology to streamline the search and
              transaction process to help all of our customers stay informed.
            </p>

            <div
              className="flex md:mt-8 ss:mt-8 mt-6 md:gap-5 ss:gap-5 
                    gap-3 items-center buttonfull">
              <button
                className="grow4 bg-custom-gradient border-none buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-24 ss:px-3 px-3 text-white 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer">
                Join Us
              </button>

              <button
                className="border-[1px] grow4 border-gradient 
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5 
                            ss:py-3 py-3 md:px-20 ss:px-10 px-6 text-custom-gradient 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent cursor-pointer
                            buttonhalf">
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("down", "tween", 0.2, 0.5)}>
            <div className="abtImg">
              <Image src={streetview} alt="about" className="aboutImg" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
