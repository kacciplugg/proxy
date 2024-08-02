"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";
import JoinUs from "@components/JoinUs";

const JoinPage = () => {
  return (
    <section className="relative w-full">
      <motion.div variants={fadeIn("left", "spring", 0.3)}>
        <JoinUs />
      </motion.div>
    </section>
  );
};

export default JoinPage;
