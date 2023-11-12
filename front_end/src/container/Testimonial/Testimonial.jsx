import "./Testimonial.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import MotionWrap from "../../wrapper/MotionWrap";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].ImgURL)}
              alt="testimonial"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
