import type { NextPageWithLayout } from "./_app";
import { type ReactElement, useState } from "react";
import { PublicLayout } from "~/components/layout/PublicLayout";

const NotFountBoundary: NextPageWithLayout = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const submmitHandler = () => {
    //TODO:
    const object = {
      firstName,
      lastName,
      streetAddress,
      zipCode,
      city,
      state,
      email,
      phoneNumber,
    };

    alert("event not handled yet");
    throw new Error("event not handled yet");
  };

  return (
    <div className="flex min-h-[calc(100vh-13rem)] w-full justify-center bg-texture">
      <div className=" md:min-w-500px min-w-300px flex w-1/2 items-center  text-center">
        <div className="rounded-lg bg-white p-8">
          <h1 className="pb-4 text-lg font-bold">
            DO NOT TRACK OR SELL MY PERSONAL INFORMATION
          </h1>
          <h2 className="pb-4 font-light">
            Please fill out the form below or call 1 (800) 656-1628 if you wish
            to remove yourself. You can also unsubscribe from our marketing
            lists by visiting the links beneath the form.
          </h2>
          <form className="grid grid-cols-2">
            <label className="w-1/2 text-start">
              <span className="w-full">First Name</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">Last Name</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">Street Address</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Street Address"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">Zip Code</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip Code"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">City</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">State/Region</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State/Region"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">Email *</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </label>
            <label className="w-1/2 text-start">
              <span className="w-full">Phone Number</span>
              <input
                className="rounded-md border-[1px] border-primary-300 bg-gray-100"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 123-456-7890"
              />
            </label>
            <div className="col-span-2 pt-8">
              <button
                type="submit"
                className="rounded-2xl bg-primary-200 px-8 py-4 text-center text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

NotFountBoundary.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default NotFountBoundary;
