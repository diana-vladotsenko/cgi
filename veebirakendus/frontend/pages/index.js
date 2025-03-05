import Head from "next/head";
//import data from "../src/data.json";
import Flights from "../components/Main";
// import Header from "../components/Header";
// import Introduction from "../components/Introduction";
// import ProductsList from "../components/ProductsList";
// import AboutSection from "../components/AboutSection";
// import Footer from "../components/Footer";

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(data);
  // }, []);

  return (
    <>
      <Head>
        <title>Lennud</title>
      </Head>
      <Flights />
      {/* <Header />
      <Introduction />
      <ProductsList />
      <AboutSection />
      <Footer /> */}
    </>
  );
}
