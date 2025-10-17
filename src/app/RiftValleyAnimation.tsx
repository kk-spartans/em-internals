"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getTitleAnimation } from "./animations";

const STEPS = [
  "Initial state: A solid block of crust.",
  "Tectonic plates are pulled apart by geological forces.",
  "Magma from the mantle rises to fill the gap created by the rift.",
  "The magma cools and solidifies, forming new crust in the valley floor.",
];

const RiftValleyAnimation = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((s) => (s < STEPS.length - 1 ? s + 1 : 0));
  };

  return (
    <div className="rift-valley-animation-container">
      <div
        className="animation-placeholder"
        role="img"
        aria-label="Animated SVG of rift valley formation"
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid meet"
          className="rift-valley-svg"
          aria-label="Rift valley formation animation"
        >
          {/* Mantle */}
          <rect x="0" y="350" width="800" height="100" fill="#FF4500" />
          <text x="360" y="400" fill="white" fontSize="20">
            Mantle
          </text>

          {/* Base Landmass */}
          <rect x="0" y="200" width="800" height="150" fill="#A0522D" />

          {/* Left Plate (Horst) */}
          <motion.g
            animate={{ x: step >= 1 ? -60 : 0 }}
            transition={{ duration: 1 }}
          >
            <path d="M 0 200 L 400 200 L 400 350 L 0 350 Z" fill="#CD853F" />
            <text x="150" y="280" fill="white" fontSize="20">
              Crust
            </text>
          </motion.g>

          {/* Right Plate (Horst) */}
          <motion.g
            animate={{ x: step >= 1 ? 60 : 0 }}
            transition={{ duration: 1 }}
          >
            <path
              d="M 400 200 L 800 200 L 800 350 L 400 350 Z"
              fill="#CD853F"
            />
            <text x="550" y="280" fill="white" fontSize="20">
              Crust
            </text>
          </motion.g>

          {/* Magma */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.rect
                x="340"
                width="120"
                fill="#FF8C00"
                initial={{ y: 350, height: 0 }}
                animate={{ y: 250, height: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )}
          </AnimatePresence>

          {/* New Crust */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.rect
                x="340"
                y="240"
                width="120"
                height="10"
                fill="#8B4513"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            )}
          </AnimatePresence>

          {/* Arrows */}
          <AnimatePresence>
            {step === 1 && (
              <>
                <motion.path
                  d="M 320 180 L 280 180 L 280 175 L 260 182.5 L 280 190 L 280 185 L 320 185 Z"
                  fill="white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                />
                <motion.path
                  d="M 480 180 L 520 180 L 520 175 L 540 182.5 L 520 190 L 520 185 L 480 185 Z"
                  fill="white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                />
              </>
            )}
          </AnimatePresence>
        </svg>
      </div>
      <motion.div className="animation-controls" {...getTitleAnimation(0.6)}>
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            className="animation-step-caption"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <strong>Step {step + 1}:</strong> {STEPS[step]}
          </motion.p>
        </AnimatePresence>
        <button type="button" onClick={handleNext} className="next-button">
          {step < STEPS.length - 1 ? "Next Step" : "Reset Animation"}
        </button>
      </motion.div>
    </div>
  );
};

export default RiftValleyAnimation;
