"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";
import PropertiesMain from "@components/PropertiesMain";
import Join from "@components/Join";

const PropertiesPage = () => {
  return (
    <section className="relative w-full">
      <motion.div variants={fadeIn("left", "spring", 0.3)}>
        <PropertiesMain />
      </motion.div>
      <Join />
    </section>
  );
};

export default PropertiesPage;
