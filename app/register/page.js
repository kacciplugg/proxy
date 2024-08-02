"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";
import Register from "@components/Register";

const SignInPage = () => {
  return (
    <section className="relative w-full">
      <motion.div variants={fadeIn("left", "spring", 0.3)}>
        <Register />
      </motion.div>
    </section>
  );
};

export default SignInPage;
