import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="w-full text-[500px] text-black font-semibold text-center bg-emerald-300 border border-black">Home</h1>
    </div>
  );
};

export default Home;