import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { CallToAction } from "~/components/shared/CallToAction";
import Image from "next/image";

const InvestmentThesis: NextPageWithLayout = () => {
  return (
    <div className="bg-texture">
      <div className="flex w-full flex-col items-center justify-center bg-primary-100 pt-4 text-center text-4xl font-bold text-white">
        <h2 className="flex flex-col">
          <span className="text-primary-200">ACQUISITION.COM</span>
          INVESTMENT THESIS
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-bold my-4 h-6 w-6 text-primary-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center pb-8">
        <h2 className="pt-8 text-2xl font-bold">WHO WE SEEK</h2>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div className="flex w-full flex-col text-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-Size.svg"
                alt="cash flow icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">$3M+ Annual Revenue</h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-Cashflow.svg"
                alt="founder led icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">CASH FLOW</h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-LeadershipGrowth.svg"
                alt="revenue icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">FOUNDER LED</h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-Growth.svg"
                alt="growing icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">GROWING</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white pb-8 text-center">
        <h2 className="pt-8 text-2xl font-bold">THIS IS WHAT YOU GET</h2>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div>
          <div className="gird-cols-1 grid px-8 sm:grid-cols-2">
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-TripleProfit.svg"
                alt="Triple revenue icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                TRIPLE REVENUE IN 5 YEARS
              </h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-IncreaseCashFlow.svg"
                alt="increase cash flow icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                INCREASE MONTHLY CASHFLOW
              </h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-LeadershipGrowth.svg"
                alt="leadership icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                CORE LEADERSHIP TEAM TO DRIVE GROWTH
              </h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-ValuableEnterprise.svg"
                alt="small to big business icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                GO FROM &quot;BIG SMALL BUSINESS&quot; INTO A &quot;VALUABLE,
                SELLABLE ENTERPRISE&quot;
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-8 text-center">
        <h2 className="pt-8 text-2xl font-bold">HOW WE DO IT</h2>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-What%201.svg"
                alt="what icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">WHAT</h3>
              <p className="w-2/3">
                Figure out the 3 to 5 big initiatives that grow the company’s
                value the most, and ruthlessly eliminate everything else.
              </p>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-Who.svg"
                alt="who icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">WHO</h3>
              <p className="w-2/3">
                Recruit talent with a winning track record to breakthrough to
                new levels of growth.
              </p>
            </div>

            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-How.svg"
                alt="how icon"
                height={150}
                width={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">HOW</h3>
              <p className="w-2/3">
                Help the new leaders install our step by step proven growth
                playbooks into each function of the business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

InvestmentThesis.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default InvestmentThesis;
