import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1 className="w-full text-[500px] text-black font-semibold text-center bg-emerald-300 border border-black">Contact</h1>
    </div>
  );
};

export default Contact;