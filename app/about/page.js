"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";
import AboutMain from "@components/AboutMain";
import Join from "@components/Join";

const AboutPage = () => {
  return (
    <section className="relative w-full">
      <motion.div variants={fadeIn("left", "spring", 0.3)}>
        <AboutMain />
      </motion.div>
      <Join />
    </section>
  );
};

export default AboutPage;
