"use client";

import React, { useState } from "react";
import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { layout } from "@styles/styles";
import { AiOutlineDollar, AiOutlineBarChart } from "react-icons/ai";
import { GiRobotAntennas } from "react-icons/gi";
import { FaRegHandshake, FaGraduationCap } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-lg font-semibold">{question}</h2>
        {isOpen ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
      </div>
      {isOpen && (
        <p
          className="mt-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Commission Structure",
      answer: `Make up to 99% of your deals. Commission splits start at:
        <br> Tier 1 70% (you) / 30% (Proxy)<br/>Tier 2 100% (you). <br>We have created an obtainable 2 tiered commission structure to make sure you maximize your earning potential. Once you hit your 2nd tier, you will make 100% of each transaction and pay proxy a small transaction fee.`,
    },
    {
      question: "What is a 2 Tier Commission System?",
      answer: `The two tiered commission system is designed to help you earn as much money as possible and make sure proxy can take care of it’s expenses so both you and proxy can grow together. After Proxy retains $30,000 from the commissions you bring in, you move to the 2nd and final tier where you will earn 100 % of your transactions. There is a nominal transaction fee for every deal completed in tier 2. <br>The tier system resets every calendar year. <br>Is there a way to make ADDITIONAL INCOME beyond closing transactions?`,
    },
    {
      question: "Referral Program",
      answer: `Yes, We will pay you 4% of every tier 1 transaction, for every agent you refer to Proxy, for as long as you both work for the company.    This is an excellent way to make additional income and help proxy secure the best talent. <br>Is Proxy a good fit for new agents? <br>Proxy is a great place to start for newly licensed agents.  We offer 1 on 1 training sessions as well group training to give you the opportunity to start earning money as quickly as possible.   Our training is not a “one size fits all”.  We aim to get to know every agents strengths and goals to help point you in the right direction.  We are happy to train you for commercial, residential or both.`,
    },
    {
      question: "Can my team or brokerage join Proxy?",
      answer: `YES!  We can help support, promote and grow your team. <br>Does Proxy utilize technology?`,
    },
  ];

  return (
    <div className="w-full my-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const JoinUs = () => {
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
            Join the team
          </h1>
          <h2>Rev Up Your NYC Real Estate Career with Us!</h2>
          <h3>
            Join our dynamic, team and unleash your full earning potential in a
            company that's revolutionizing real estate. We’re challenging an
            industry slow to adapt by rethinking the entire real estate process.
            We offer the industry's most aggressive commission splits, giving
            you the ability to earn 90% more than anywhere else. Our innovative
            training programs prepare you to conquer both residential and
            commercial markets. We believe in the power of collaboration,
            providing a supportive environment that promotes shared success and
            continuous growth. Our cutting-edge technology ensures you’re always
            ahead of the curve, and our lucrative referral program offers
            additional income opportunities. Don't just work in real
            estate—thrive in it. Join us today and transform your career!
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="flex items-center w-full md:mb-16 ss:mb-8 
            mb-16 mt-24">
          <h1
            className="text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
            Why Proxy? We just hit different…
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
                <AiOutlineDollar size={40} />
                <h1>Supercharge Your Earnings</h1>
                <p>
                  Up to 90% more commissions than your traditional brokerage. We
                  have NO DESK FEES!!! (see FAQ below for more details)
                </p>
              </div>
              <div className="service">
                <AiOutlineBarChart size={40} />
                <h1>Additional Income</h1>
                <p>
                  Create an additional profit center by referring an unlimited
                  amount of agents to the company.
                </p>
              </div>
              <div className="service">
                <GiRobotAntennas size={40} />
                <h1>Innovation</h1>
                <p>
                  We are obsessed with Innovation. That means you get
                  cutting-edge tech, streamlined workflows, and more time to
                  focus on what matters: your clients. Our powerful tools keep
                  you organized, educated, and cut down on administrative time.
                  Stay ahead of the curve with market insights and data at your
                  fingertips. We believe it is our responsibility to our agents
                  and clients to always be improving our tech and approach to
                  the deal process.
                </p>
              </div>
              <div className="service">
                <FaRegHandshake size={40} />
                <h1>Collaboration</h1>
                <p>
                  At Proxy, collaboration is at our core. We leverage technology
                  and a supportive team to ensure you have everything you need
                  to succeed. Together, we close more deals, faster. Streamlined
                  processes and support free up your time to focus on what
                  matters most – your clients We celebrate each other's wins and
                  believe in a rising tide lifts all boats mentality.
                  Collaborate with experienced agents and tap into a wealth of
                  knowledge.
                </p>
              </div>
              <div className="service">
                <FaGraduationCap size={40} />
                <h1>Training</h1>
                <p>
                  Knowledge is Power. We have a dedicated team to help you learn
                  and grow with Proxy. Whether you are a new agent looking to
                  understand how to utilize your skills and contacts or a
                  seasoned veteran looking for new ways to promote and grow, we
                  got you!
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
            FAQs
          </h1>
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="flex-1 relative items-center justify-center">
            <div className="bg-main w-full h-[2px]" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.5)}
          className="faqSection">
          <motion.div
            variants={textVariant()}
            className={`${layout.sectionInfo}`}>
            <FAQSection />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(JoinUs, "joinus");
