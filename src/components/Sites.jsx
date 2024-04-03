import { Helmet } from "react-helmet-async";

const Sites = () => {
  return (
    <div>
      <Helmet>
        <title>Our Sites</title>
      </Helmet>
      <h1 className="w-full text-[400px] text-black font-semibold text-center bg-emerald-300 border border-black">Our Sites</h1>
    </div>
  );
};

export default Sites;