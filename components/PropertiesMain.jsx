"use client";

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { white_stairs, nightstand, hallway, cushion } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";
import { FaMapMarkerAlt, FaDoorOpen } from "react-icons/fa";

const PropertiesMain = () => {
  return (
    <section
      className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative propertiesMainSection">
      <div
        className="items-center w-full mx-auto flex flex-col 
        max-w-[86rem]">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex w-full md:mb-12 ss:mb-8 
            mb-8 propertiesHeader">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px]">
            Our properties
          </h1>
          <h3>Proxy will give you help hand with search for a new living</h3>
          <div className="filterSection">
            <div className="filterFields">
              <div className="filterFieldsOne">
                <select name="Location" id="">
                  <option value="loc1">Location 1</option>
                  <option value="loc2">Location 2</option>
                  <option value="loc3">Location 3</option>
                </select>
                <select name="Type" id="">
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
                <select name="Size" id="">
                  <option value="size1">Size 1</option>
                  <option value="size2">Size 2</option>
                  <option value="size3">Size 3</option>
                </select>
              </div>
              <div className="filterFieldsTwo">
                <div className="price">
                  <label htmlFor="price-to">Price To:</label>
                  <input
                    type="text"
                    name="price-to"
                    id="price-to"
                    placeholder="$10000"
                  />
                </div>
                <div className="price">
                  <label htmlFor="price-from">Price From:</label>
                  <input
                    type="text"
                    name="price-from"
                    id="price-from"
                    placeholder="$10000"
                  />
                </div>
              </div>
            </div>
            <div className="filterSubmit">
              <div className="filterHelp">
                <p>
                  <span>Can't find your location?</span> Ask us here
                </p>
              </div>
              <div className="filterButtons">
                <p>Advanced filters</p>
                <button
                  className="grow4 bg-custom-gradient buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-10 ss:px-3 px-3 text-white 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer">
                  Filter results
                </button>
              </div>
            </div>
          </div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(PropertiesMain, "propertiesmain");
