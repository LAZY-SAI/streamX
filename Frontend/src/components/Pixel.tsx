import { motion } from "framer-motion";
//import { hover } from "framer-motion";
const COLS = 18;
const ROWS = 6;
const STEP = 0.04;

const tileVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
  
};

export default function Pixel() {
  const tiles = [...Array(COLS * ROWS)];

  return (
    <div
      className="pointer-events-none absolute inset-0 grid overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {tiles.map((_, i) => {
        
        const col = i % COLS;
        return (
          <motion.div
            whileHover={
              {
                scale:1.2,
                transition: {
                  duration: 0.16, delay: Math.random() * (col * STEP),
                  ease: "easeInOut",
                  backgroundColor: "slate-800"
                }
              }
          }
            key={i}
            className="bg-slate-800"
            variants={tileVariants}
            transition={{ duration: 0.10, delay: Math.random()*(col*STEP), ease: "easeInOut" }}
          
          />
        )
      })}
    </div>
  );
}