import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { GreatPlaceToWork } from "~/components/shared/GreatPlaceToWork";

const openings = [
  {
    title: "Business Consultant",
    company: "Porfolio Company",
    role: "Business Development",
    location: "Remote | United States",
  },
  {
    title: "Chief Financial Officer",
    company: "Acquisition.com",
    role: "Executive",
    location: "Remote | United States",
  },
  {
    title: "Controller",
    company: "Porfolio Company",
    role: "Executive",
    location: "Remote | United States",
  },
  {
    title: "Sales Director",
    company: "Porfolio Company",
    role: "Business Development",
    location: "Remote | United States",
  },
];

const OpenJobs: NextPageWithLayout = () => {
  return (
    <div>
      <div className="bg-primary-100 text-center">
        <h1 className="px-4 pb-16 pt-8 text-3xl font-extrabold text-white sm:px-16 sm:text-5xl md:text-7xl">
          JOBS AT <br />
          <span className=" text-primary-200">ACQUISITION.COM</span>
        </h1>
      </div>
      <GreatPlaceToWork />
      <div className="my-10 flex w-full flex-col items-center sm:mb-16 md:flex-row">
        <div className="mb-4 flex w-1/2 flex-col justify-around text-center sm:w-full sm:flex-row md:mb-0">
          <label className="text-bold flex flex-col">
            Filter by Department
            <select
              className="rounded-md border-[1px] border-primary-300"
              placeholder="select"
              onChange={() => alert("not handled")}
            >
              <option value={undefined}>Choose Department</option>
              <option value="portfolio_opertaions">Portfolio Operations</option>
              <option value="creative">Creative</option>
              <option value="administrative">Administrative</option>
              <option value="executive">Executive</option>
              <option value="business_development">Business Development</option>
            </select>
          </label>
          <label className="text-bold flex flex-col">
            Filter by Category
            <select
              className="rounded-md border-[1px] border-primary-300"
              onChange={() => alert("not handled")}
            >
              <option value={undefined}>Choose Category</option>
              <option value="acquisition.com">Acquisition.com</option>
              <option value="portfolio_company">Portfolio Company</option>
            </select>
          </label>
          <label className="text-bold flex flex-col">
            Filter by Location
            <select
              className="rounded-md border-[1px] border-primary-300"
              onChange={() => alert("not handled")}
            >
              <option value={undefined}>Choose Location</option>
              <option value="remote">Remote | United States</option>
              <option value="hybrid">Hybrid | Las Vegas, NV</option>
              <option value="onsite">Onsite | Sacramento, CA</option>
            </select>
          </label>
        </div>
        <button
          className="whitespace-nowrap rounded-lg bg-primary-100 px-4 py-2 text-white md:ml-4 md:mr-8"
          onClick={() => alert("not handled")}
        >
          Reset Filters
        </button>
      </div>
      <div className="flex justify-center bg-white pt-8">
        <div className="h-[5px] w-[80px] bg-primary-200"></div>
      </div>
      <div className="grid gap-8 bg-white p-8 pb-12 sm:grid-cols-2">
        {openings.map((opening) => {
          const { title, company, role, location } = opening;
          return (
            <JobOpeningCard
              key={`${title}, ${company}`}
              title={title}
              company={company}
              role={role}
              location={location}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center bg-primary-100 pb-10 pt-8">
        <h3 className="pb-4 text-3xl text-white">NO MATCH?</h3>
        <button
          className="rounded-3xl border-[1px] border-primary-200 bg-white px-8 py-4 text-primary-200"
          onClick={() => alert("not handled")}
        >
          Join Mozi Talent
        </button>
      </div>
    </div>
  );
};
function JobOpeningCard(props: {
  title: string;
  company: string;
  role: string;
  location: string;
}) {
  const { title, company, role, location } = props;
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 text-center shadow-xl">
      <h3 className="my-2 text-2xl font-bold">{title}</h3>
      <p className="my-2 text-lg">{company}</p>
      <p className="my-2 text-lg">{role}</p>
      <p className="my-2 text-lg">{location}</p>
      <button
        className="mb-2 mt-4 rounded-xl bg-primary-200 px-4 py-2 text-white"
        onClick={() => alert("not handled")}
      >
        Apply Now
      </button>
    </div>
  );
}
OpenJobs.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default OpenJobs;
