import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(340 60% 70% / ${particle.opacity}), hsl(290 50% 60% / ${particle.opacity * 0.5}), transparent)`,
            boxShadow: `0 0 ${particle.size * 3}px hsl(340 55% 55% / ${particle.opacity * 0.6})`,
          }}
          animate={{
            y: [0, -80, -160, -80, 0],
            x: [0, 20, -10, 30, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity, particle.opacity * 0.7, particle.opacity],
            scale: [1, 1.2, 1, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Larger, slower floating orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            width: 8 + i * 2,
            height: 8 + i * 2,
            background: i % 2 === 0 
              ? `radial-gradient(circle, hsl(340 65% 65% / 0.25), transparent)`
              : `radial-gradient(circle, hsl(280 55% 60% / 0.2), transparent)`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, i % 2 === 0 ? 40 : -40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
