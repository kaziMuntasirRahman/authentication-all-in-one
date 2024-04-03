import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className="w-full text-[500px] text-black font-semibold text-center bg-emerald-300 border border-black">About</h1>
    </div>
  );
};

export default About;