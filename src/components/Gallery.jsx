import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <h1 className="w-full text-[500px] text-black font-semibold text-center bg-emerald-300 border border-black">Gallery</h1>
    </div>
  );
};

export default Gallery;