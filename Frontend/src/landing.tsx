import Layout from "./layout/layout";
import Loading from "./loading";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Layout>
      {isLoading && (<Loading />)}
      <div>
        landing page
      </div>
    </Layout>
  );
}