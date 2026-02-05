import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ClosureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-mobile relative pb-24">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-wine/15 blur-[80px] rounded-full" />
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 font-serif text-lg md:text-xl text-muted-foreground text-center italic max-w-sm"
      >
        Thank you for taking a moment to read this.
      </motion.p>
      
      {/* Signature flourish */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 mt-10 w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
    </section>
  );
};

export default ClosureSection;
