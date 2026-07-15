"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideRightProps = {
  children: ReactNode;
};

export default function SlideRight({ children }: SlideRightProps) {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
