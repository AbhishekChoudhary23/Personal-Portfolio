import React from "react";
import { motion } from "framer-motion";

/** Fades and lifts its children into place the first time they scroll into view. */
const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
