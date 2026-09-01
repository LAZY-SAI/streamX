
import { useState } from "react";
import Layout from "./layout/layout";
import Loading from "./loading";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  

  
  return (
    <Layout>
      {isLoading && (<Loading onComplete={()=> setIsLoading(false)}/>)}
      
    </Layout>
  );
}