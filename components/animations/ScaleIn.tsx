"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScaleInProps = {
  children: ReactNode;
};

export default function ScaleIn({ children }: ScaleInProps) {
  return (
    <motion.div
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}
