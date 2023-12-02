import Featured from "./Featured/Featured";
import Banner from "./Hero/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Featured />
    </div>
  );
};

export default Home;
