import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles, Gift, Heart, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import backgroundImage from 'figma:asset/9677d6c8ac3746f09afdf61669153c51af801bb6.png';

export function VideoReveal() {
  const [revealed, setRevealed] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleReveal = () => {
    setShowButton(false);
    
    // Trigger confetti multiple times with vintage colors
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d4af37', '#cd7f32', '#c9b037', '#b8860b', '#daa520'],
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d4af37', '#cd7f32', '#c9b037', '#b8860b', '#daa520'],
      });
    }, 50);

    // Big confetti burst with vintage gold colors
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#cd7f32', '#c9b037', '#b8860b', '#daa520'],
    });

    setTimeout(() => {
      setRevealed(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Vintage paper background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(0.3)',
        }}
      />
      
      {/* Animated background elements */}
      <AnimatePresence>
        {!revealed && (
          <>
            <motion.div
              className="absolute top-20 left-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-12 h-12 text-amber-800/40" />
            </motion.div>
            <motion.div
              className="absolute top-40 right-32"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Star className="w-16 h-16 text-amber-800/40" />
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-40"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles className="w-14 h-14 text-amber-800/40" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-20"
              animate={{
                y: [0, 25, 0],
                rotate: [0, -20, 20, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Gift className="w-12 h-12 text-amber-800/40" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {showButton ? (
          <motion.div
            key="button"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gift className="w-24 h-24 text-amber-900 mx-auto mb-8" />
            </motion.div>
            
            <motion.h1
              className="text-amber-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              thank you for reaching this far...
              please click below to see your surprise! ❤️

            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={handleReveal}
                size="lg"
                className="bg-amber-800 text-amber-50 hover:bg-amber-900 px-8 py-6 text-xl shadow-xl border-2 border-amber-700"
              >
                <Sparkles className="mr-2 w-6 h-6" />
                Click with love to Reveal 🤭
              </Button>
            </motion.div>
          </motion.div>
        ) : revealed ? (
          <motion.div
            key="video"
            initial={{ scale: 0, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="relative z-10"
            style={{ width: '1080px', maxWidth: '90vw' }}
          >
            {/* Animated sparkles around video */}
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Sparkles className="w-8 h-8 text-amber-600" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                }}
              >
                <Star className="w-8 h-8 text-amber-600" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{
                  rotate: 360,
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                }}
              >
                <Heart className="w-8 h-8 text-amber-700" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                }}
              >
                <Sparkles className="w-8 h-8 text-amber-600" />
              </motion.div>

              {/* Video container with shimmer effect */}
              <motion.div
                className="relative bg-amber-100 rounded-2xl p-2 shadow-2xl overflow-hidden border-4 border-amber-800/30"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(212, 175, 55, 0.5)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
                
                <iframe
                  src="https://player.vimeo.com/video/1139618937?autoplay=1"
                  className="w-full rounded-xl"
                  style={{ width: '1080px', height: '1920px', maxWidth: '100%', maxHeight: '80vh', border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Special Message Video"
                />
              </motion.div>
            </div>

            {/* Animated message below video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <motion.p
                className="text-amber-900 text-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💝I'm u'r little remainder edis. Please Listen this till end 💝
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Sparkles className="w-16 h-16 text-amber-900 mx-auto" />
            </motion.div>
            <motion.p
              className="text-amber-900 mt-4 text-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Preparing your surprise...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}