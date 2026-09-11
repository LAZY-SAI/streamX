import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Pixel from "../Pixel";
import RedPixel from "../RedPixel";

interface NavItem {
  id: number;
  name: string;
  to: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 1, name: "product", to: "/product" },
  { id: 2, name: "pricing", to: "/pricing" },
  { id: 3, name: "resources", to: "/resources" },
  { id: 4, name: "about", to: "/about" },
];

const MotionNavLink = motion(NavLink);


export default function Nav() {
  const rollVariants = {
    rest: { y: "0%" },
    hover:{y:"-50%"}
  }
  return (
    <nav
      className="-mt-1 grid border border-black/20 bg-(--main-color) w-full mx-auto font-mono text-sm tracking-wide"
      style={{ gridTemplateColumns: `4fr repeat(${NAV_ITEMS.length}, 1fr) 1fr ` }}
    >
      <div className="flex items-center gap-2 px-5 py-4 ">
        <span className=" text-lg tracking-normal">StreamX</span>
      </div>

      {NAV_ITEMS.map((item) => (
        <MotionNavLink
          key={item.id}
          to={item.to}
          initial="rest"
          whileHover="hover"
          animate="rest"
          whileTap={{scale:1.1}}
          className="group relative flex items-center overflow-hidden border border-black/20 px-5 py-4 uppercase"
        >
          <Pixel/>

          
          
          <span className="relative z-10 h-5 overflow-hidden ">
            <motion.span
              className="flex flex-col "
              variants={rollVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              
              
              
            >
              <span className="text-black leading-5">{item.name}</span>
              <span className="text-white leading-5">{item.name}</span>
            </motion.span>
            
        </span>

          <span
            aria-hidden
            className="absolute top-1 right-1 z-10 h-2 w-2 border-t border-r border-white/70
              opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-100"
          />
        </MotionNavLink>
      ))}
{/*
      contact section*/}
        
      <MotionNavLink
        to={"/contact"}
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileTap={{scale:1.1}}
        className="group relative flex items-center justify-between gap-2 overflow-hidden border-l border-black/20 px-5 py-4 text-orange-600"
      >
        
        <RedPixel/>
        <span className="relative z-10 h-5 overflow-hidden">
          <motion.span
            className="flex flex-col"
           variants={rollVariants}
             transition={{ duration: 0.3, ease: "easeInOut" }}
            
            
          >
            <span className="text-red-600 leading-5">
              contact us
              <span aria-hidden>→</span>
            </span>
            <span className="text-white">
              contact us
              <span aria-hidden>→</span>
            </span>
          </motion.span>
        </span>
     </MotionNavLink>
    </nav>
  );
}