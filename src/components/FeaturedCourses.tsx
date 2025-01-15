import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";

const FeaturedCourses = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Listen to screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example: <768px for mobile breakpoint
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  };

  return (
    <div className="w-[90%] mx-auto  cursor-grab">
      <h1 className="text-center text-2xl">Executive Diploma Programme</h1>
      <div className="mt-10">
        <Slider {...settings} className="">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Slider>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-2xl">
          Top Certifications Courses in Product Design
        </h1>
        <div className="mt-10">
          <Slider {...settings} className="">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Slider>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-2xl">
          Trending AEC Certification Courses
        </h1>
        <div className="mt-10">
          <Slider {...settings} className="">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
