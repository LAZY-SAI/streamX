import { useState } from "react";
import Layout from "./layout/layout";
import Loading from "./loading";
import { motion } from "framer-motion";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  
  const slideVariants = {
    rest: { x: "0%" },
    slide: { x: "-100%" },
  };
  const features = [
    {id:1, title:"Discover New Movies"},
    {id:2, title:"Watch with Friends"},
    {id:3, title:"Upload Your Own Movies"},
  ]

  return (
    <Layout>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      <div
        className="  overflow-hidden "
      >
        {/*hero section*/}
        <div className="h-136 flex items-center justify-center ">
          <h1>image</h1>
        </div>

        <div className="grid grid-cols-12 border  border-l-0 border-r-0 w-full ">
          <div className="col-span-7  px-8 ">
            <h3 className="font-bold text-4xl justify-evenly font-stretch-expanded capitalize">
              A PLATFORM WHERE YOU AND YOUR FRIENDS CAN WATCH MOVIES TOGETHER
            </h3>
          </div>

          <div className="col-span-3 border-l border-black px-6 py-6 text-sm">
            <div>
              section-3
            </div>
            <div className="overflow-hidden w-full  ">
              <span className="flex w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 z-10 pointer-event-none"/>
                <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"/>
                <motion.li
                  className="flex gap-6 shrink-0"
                  animate={{x: `-${features.length * 50}%`}}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity}}>
                  {features.map((i) => {
                    return (
                      <li
                        className="text-gray-700 capitalize"
                        key={i.id}>
                        {i.title}
                      </li>
                    )
                  })}
                </motion.li>
              </span>
            </div>
           
          </div>
          <div className="col-span-1 border-l  border-black px-4 py-4 text-orange-600">
            <span>
              DISCOVER NEW MOVIES
            </span>

            
          </div>

          
        </div>
        
      </div>

      {/*herosection 2*/}
      <section>
        <div className="grid grid-cols-16 border-b border-black">
          <div className="col-span-6 h-180 row-span-2 border-r border-black p-6">
            <h3>carousel</h3>
          </div>
          <div className="col-span-10 border-b border-black p-6">
            <h3>our motive</h3>
          </div>
          <div className="col-span-10 p-6">
            <div>our initial goal</div>
          </div>
        </div>
      </section>



      {/*herosection 3*/}
      <section>
        <div className="grid grid-cols-16 border-b ">
          <div className="col-start-1 col-span-10 row-start-1 border-b  p-6">
            <h3>about us</h3>
          </div>
          <div className="col-start-1 col-span-10 row-start-2 p-6">
            <h3>something interesting</h3>
          </div>

          <div className="col-start-11 col-span-6 row-start-1 row-span-2 h-180  border-l">
            image
          </div>
        </div>
      </section>

      {/*footer*/}
      <footer>
        
      </footer>
    </Layout>
  );
}
