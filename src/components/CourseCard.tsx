import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

const CourseCard = () => {
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

  return (
    <div
      className={`${
        isMobile ? "max-w-sm" : "max-w-[260px] "
      } mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-200`}
    >
      <div className="relative">
        <img
          src="https://miro.medium.com/v2/resize:fit:20864/1*oM1GuZ0oC3_9v1GfKC2Egg.jpeg"
          alt="Course"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full">
          First Job
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Executive Diploma in BIM
        </h3>
      </div>

      <div className="px-4 py-2 text-center">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2 bg-red-500 p-1 rounded-lg">
            <span className="text-sm text-white">400 hrs</span>
          </div>
          <div className="flex items-center space-x-2 bg-red-500 p-1 rounded-lg">
            <span className="text-sm text-white">In-centre</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Project-based assessment | World-className courseware | Industry
          recognized certificate | Placement support
        </p>
      </div>

      <div className="p-4 text-center">
        <button className="w-full bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white font-medium py-2 rounded-lg transition duration-200">
          Know More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
