import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const InteractionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-mobile relative">
      {/* Center glow */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, hsl(340 65% 50% / 0.4), hsl(290 55% 45% / 0.25), transparent)' }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 text-center max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-2xl md:text-3xl text-foreground mb-12"
        >
          Would you like to talk sometime?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.a
            href="tel:7890591664"
            className="btn-romantic inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Yes
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractionSection;
