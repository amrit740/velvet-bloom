import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExpressionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    { text: "I don't know where this goes.", delay: 0 },
    { text: "But I know I'd like to know you better —", delay: 0.3 },
    { text: "calmly, honestly, without pressure.", delay: 0.6 }
  ];

  return (
    <section ref={ref} className="section-mobile relative">
      {/* Colorful ambient glows */}
      <div className="absolute left-0 top-1/4 w-[280px] h-[350px] blur-[90px] rounded-full" 
           style={{ background: 'radial-gradient(circle, hsl(290 55% 42% / 0.4), transparent)' }} />
      <div className="absolute right-0 bottom-1/4 w-[220px] h-[280px] blur-[80px] rounded-full" 
           style={{ background: 'radial-gradient(circle, hsl(340 60% 48% / 0.35), transparent)' }} />
      
      <div className="relative z-10 text-center max-w-md px-4">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: line.delay,
              ease: "easeOut"
            }}
            className={`font-serif text-xl md:text-2xl leading-relaxed ${
              index === lines.length - 1 
                ? "text-foreground mt-6 font-medium" 
                : "text-muted-foreground mb-3"
            }`}
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default ExpressionSection;
