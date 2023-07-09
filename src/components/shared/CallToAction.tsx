import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="call-to-action flex flex-wrap justify-center bg-white px-4 pt-8">
      <div className="">
        <Image
          src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_FreeAdvancedTraining-Alex%201.png"
          alt="Alex and Leila"
          width={300}
          height={250}
        />
      </div>
      <div className=" flex flex-col justify-center text-center">
        <h3 className="text-4xl font-bold">
          WANT US TO HELP <br />
          <span className="font-extrabold text-primary-100">
            YOU EXPLODE PROFIT?
          </span>
        </h3>
        <p className="mt-4 font-light">
          See how <span className="text-primary-200">Acquisition.com</span>
          &nbsp;can help.
        </p>
        <div className="mt-4">
          <button className="mb-8 rounded-2xl bg-primary-200 px-6 py-4 text-white">
            Learn More
          </button>
          {/* <br /> */}
          <button className="m-4 mb-8 w-auto rounded-2xl bg-primary-200 px-6 py-4 text-white">
            Work With Us
          </button>
        </div>
      </div>
    </div>
  );
};
