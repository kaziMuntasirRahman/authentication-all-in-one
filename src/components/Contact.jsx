import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Our Location</title>
      </Helmet>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3925.3755247438353!2d89.8543323089377!3d23.596575698958887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1712210357668!5m2!1sen!2sbd"
        width="80%"
        height="700px"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;