import { motion } from "framer-motion";


const COLS = 18;
const ROWS = 6;
const STEP = 0.02;

const tileVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
  
};
const  math : typeof Math = Math;
export default function Pixel() {
  const tiles = [...Array(COLS * ROWS)];
  
  return (
    <div
      className="pointer-events-none z-10 absolute inset-0 
      grid overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {tiles.map((_, i) => {
        
         const col = i % COLS;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            
            transition={{ duration: 0.10, delay: math.random()*(col*STEP), ease: "easeInOut" }}
            key={i}
            className="bg-gray-800 scale-[1.15]"
            variants={tileVariants}
            
          
          />
        )
      })}
    </div>
  );
}

