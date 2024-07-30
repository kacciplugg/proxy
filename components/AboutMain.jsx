"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";
import {
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";

const AboutMain = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative aboutMainSection">
      <div
        className="items-center w-full mx-auto flex flex-col 
        max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex w-full md:mb-12 ss:mb-8 
            mb-8 aboutHeader">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px]">
            About us
          </h1>
          <h3>
            We represent you. It all starts with CUSTOMER SERVICE. Our clients
            and our agents are both customers of Proxy. We believe the current
            real estate practices are broken and out of date. At proxy we are
            reimagining the entire real estate transaction process to better
            serve all parties with high commission splits, innovation, and
            transparency.
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="flex md:flex-row ss:flex-row flex-col gap-52 w-full mt-16">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <div className="valuesContainer">
              <div className="value">
                <AiOutlineDollar size={40} />
                <h1>Commissions</h1>
                <p>
                  Giving agents a substantial commission split = Agents who are
                  happy and are in a position to pass savings to their clients.
                </p>
              </div>
              <div className="value">
                <AiOutlineBulb size={40} />
                <h1>Innovation</h1>
                <p>
                  We promise to never stop innovating our processes and
                  technologies. You need to know market data and trends to
                  confidently prepare you to make the best investment and life
                  decisions. We are currently experimenting with AI / machine
                  learning and blockchain technology to streamline the search
                  and transaction process to help all of our customers stay
                  informed.
                </p>
              </div>
              <div className="value">
                <AiOutlineEye size={40} />
                <h1>Transparency</h1>
                <p>
                  Giving our clients transparency = Clients feel comfortable and
                  confident they have all the market data and scenarios they
                  require to make their decision.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-16 ss:mb-8 
            mb-16 mt-24">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            Our services
          </h1>
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="flex-1 relative items-center justify-center">
            <div className="bg-main w-full h-[2px]" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="flex md:flex-row ss:flex-row flex-col gap-52 w-full">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <div className="servicesContainer">
              <div className="service">
                <AiOutlineHome size={40} />
                <h1>Landlord Representation</h1>
                <p>
                  Today the real estate industry faces many challenges. It is no
                  longer acceptable to throw up a sign and an internet listing
                  and wait for your buyers or tenants to come to you. We take an
                  aggressive and proactive approach when you honor us with your
                  business. Contact us so we can discuss our proprietary data
                  analytics and direct marketing strategy.
                </p>
              </div>
              <div className="service">
                <AiOutlineUser size={40} />
                <h1>Tenant Representation</h1>
                <p>
                  With 20+ years of representing tenants we have worked with
                  your industry. We understand that companies grow and shrink,
                  and every tenant may have unique requirements. We promote
                  great listening so our agents can understand what is important
                  to you and where to start. We utilize market data and trends
                  to help you become aware of what you need for today and what
                  may should be considered for your future. Whether you are 30
                  years in business or just starting out we will help you
                  seamless located the your best options.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(AboutMain, "aboutmain");
