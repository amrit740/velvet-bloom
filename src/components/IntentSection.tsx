import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "This isn't random.",
    "And it isn't rushed.",
    "I believe effort says more than messages ever could."
  ];

  return (
    <section ref={ref} className="section-mobile relative">
      {/* Subtle side glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-wine/20 blur-[100px] rounded-full" />
      
      <div className="relative z-10 text-center max-w-md">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.3,
              ease: "easeOut"
            }}
            className={`font-serif text-xl md:text-2xl leading-relaxed ${
              index === lines.length - 1 
                ? "text-foreground mt-8 italic" 
                : "text-muted-foreground mb-4"
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default IntentSection;
