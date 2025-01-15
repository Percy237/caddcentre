const Statistics = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl text-center">
        World class training, world over.
      </h1>
      <div className="flex justify-between  w-[90%] mx-auto mt-10">
        <div className="flex   flex-col justify-center items-center">
          <span className="text-3xl">2M+</span>
          <span>Engineers and Professionals trained</span>
        </div>
        <div className="flex flex-col   justify-center items-center">
          <span className="text-3xl">128</span>
          <span>training centres </span>
        </div>
        <div className="flex flex-col   justify-center items-center">
          <span className="text-3xl">100</span>
          <span>Global locations</span>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <span className="text-3xl">100+</span>
          <span>Industry-ready courses</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
