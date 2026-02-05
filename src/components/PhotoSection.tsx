import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import photo from "@/assets/photo.jpg";

const PhotoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-mobile relative py-20">
      {/* Ambient glow behind card */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] rounded-3xl bg-rose-glow/15 blur-[80px]"
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Frosted glass card */}
        <div className="glass-card rounded-3xl p-4 md:p-6 photo-glow max-w-sm mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={photo}
              alt="A moment I admire"
              className="w-full h-auto object-cover aspect-[3/4]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 pointer-events-none" />
          </div>
          
          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-5 font-serif text-base md:text-lg italic text-muted-foreground"
          >
            A moment I admire.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoSection;
