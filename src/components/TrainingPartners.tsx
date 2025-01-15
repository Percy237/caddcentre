import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
} from "../assets/images";
import Marquee from "./Marquee";

const TrainingPartners = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <h1 className="text-2xl text-center">Training Partners</h1>
      <Marquee speed={24} gapBetween={8}>
        <div className="flex space-x-4 ">
          <img src={partner1} alt="" className="w-[15%]" />
          <img src={partner2} alt="" className="w-[15%]" />
          <img src={partner3} alt="" className="w-[15%]" />
          <img src={partner4} alt="" className="w-[15%]" />
          <img src={partner5} alt="" className="w-[15%]" />
          <img src={partner6} alt="" className="w-[15%]" />
        </div>
      </Marquee>
    </div>
  );
};

export default TrainingPartners;
