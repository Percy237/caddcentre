const About = () => {
  return (
    <div className="p-12 mt-10">
      <h1 className="text-2xl text-center">
        CAD SKILLS CENTER INDIA: Pioneering Edtech Transformation for Over 7
        Years
      </h1>
      <h2 className="text-center text-xl">Bridging Learning and Careers</h2>

      <div className="w-full mt-10 md:flex lg:flex">
        <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-8">
          <p>
            In just 7 years of presence in Cameroon, CAD SKILLS CENTER INDIA has
            nurtured thousands of careers that are prospering across the world
            in engineering, graphic design, project management,
            entrepreneurship.
          </p>
          <p>
            We provide Training and deliver Certification in a wide range of
            cutting-edge Digital Technology skills.
          </p>
          <p>
            We also offer support services to facilitate social-occupational
            inclusion and professional development in the workplace for the most
            varied profiles.
          </p>
          <p>
            Discover your true “One-stop-shop” for certified digital skills that
            address major workplace challenges, for optimal employability and
            best performance.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/2  m-auto">
          <div className="grid grid-cols-4 md:grid-cols-4 grid-rows-4 md:grid-rows-4 gap-2 md:gap-2 m-4">
            <div className="col-start-1 flex justify-center text-center flex-col items-center row-start-1 col-span-4 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">
              <span className="text-xl">2M+</span>
              <span className="text-sm">
                Engineers and professional trained
              </span>
            </div>
            <div className="col-start-1 row-start-2 flex justify-center text-center flex-col items-center col-span-4 md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">
              <span className="text-xl">100</span>
              <span className="text-sm">Training centre</span>
            </div>
            <div className="col-start-1 row-start-3 flex justify-center text-center flex-col items-center col-span-4 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">
              <span className="text-xl">5</span>
              <span className="text-sm">National locations</span>
            </div>
            <div className="col-start-1 row-start-4 flex justify-center text-center flex-col items-center col-span-4 md:col-start-3 md:row-start-3 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">
              <span className="text-xl">100+</span>
              <span className="text-sm">Industries ready courses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <i className="w-1/2 text-center">
          Act today for your better future, join us and let's explore together
          the opportunities for acquiring trendy skills. (Bridging the gap
          between Education System and Work place through Digital Technology).
        </i>
      </div>
    </div>
  );
};

export default About;
