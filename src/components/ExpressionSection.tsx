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
      {/* Left ambient glow */}
      <div className="absolute left-0 top-1/3 w-[250px] h-[350px] bg-plum/25 blur-[90px] rounded-full" />
      
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
