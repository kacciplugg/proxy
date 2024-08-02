"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";

const Register = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative registerSection">
      <div className="items-center w-full flex flex-col">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex w-full md:mb-12 ss:mb-8 
            mb-8 aboutHeader mt-[-50px]">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] pb-[50px]">
            Sign In
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="signInForm">
          <motion.div variants={textVariant()} className="signInFormInner">
            <h2>Customer Fields</h2>
            <div className="signInFields">
              <div className="signInField">
                <label htmlFor="fname">First Name: </label>
                <input
                  type="text"
                  name="fname"
                  id=""
                  placeholder="First Name"
                />
              </div>
              <div className="signInField">
                <label htmlFor="lname">Last Name: </label>
                <input type="text" name="lname" id="" placeholder="Last Name" />
              </div>
              <div className="signInField">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="signInFields">
              <div className="signInField">
                <label htmlFor="phone">Phone Number: </label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Phone Number"
                />
              </div>
              <div className="signInField">
                <label htmlFor="business">Business: </label>
                <select name="business" id="">
                  <option value="business1">Business 1</option>
                  <option value="business2">Business 2</option>
                  <option value="business3">Business 3</option>
                </select>
              </div>
              <div className="signInField">
                <label htmlFor="businessName">Business: </label>
                <input
                  type="text"
                  name="businessName"
                  id=""
                  placeholder="Business Name"
                />
              </div>
            </div>
            <div className="signInFields">
              <div className="signInField">
                <label htmlFor="businessAddress">Business Address: </label>
                <input
                  type="text"
                  name="businessAddress"
                  id=""
                  placeholder="Current Business Address"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Register, "register");
