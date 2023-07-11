import Image from "next/image";

export function GreatPlaceToWork() {
  return (
    <div className="flex flex-col-reverse items-center justify-around bg-great-place-to-work bg-cover bg-center px-8 py-12 sm:flex-row">
      <div>
        <Image
          src="https://www.acquisition.com/hs-fs/hubfs/Acquisition.com_2023_Certification_Badge.png?width=280&height=396&name=Acquisition.com_2023_Certification_Badge.png"
          alt="great place to work certification"
          width={750}
          height={1000}
          style={{ width: "120px", height: "175px" }}
        />
      </div>
      <h2 className="mb-8 text-center text-2xl font-extrabold text-white sm:mt-0 sm:pr-8">
        NAMED A GREAT PLACE TO <br />
        WORK FOR 2023
      </h2>
    </div>
  );
}
