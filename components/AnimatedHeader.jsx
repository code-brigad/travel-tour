import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedHeader = ({ text, Tag = "h1", className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block">
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={defaultAnimations}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="sm:inline-block hidden">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedHeader;
