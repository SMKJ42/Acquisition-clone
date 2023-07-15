import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { TeamMemberCard } from "~/components/team/teamMemberCard";
import team from "~/utils/staticData/bios";
import Image from "next/image";

interface TeamMember {
  firstName: string;
  lastName: string;
  suffix: string | null;
  role: string;
  title: string | null;
  profileImage: string;
  bio: (string | undefined)[];
}

const TheTeam: NextPageWithLayout = () => {
  return (
    <div className="bg-texture">
      <div className="bg-white">
        <div className="flex w-full flex-col items-center">
          <h2 className="m-4 mt-6 px-2 pb-4 text-center text-4xl font-extrabold">
            MEET OUR <span className="truncate">LEADERSHIP TEAM</span>
          </h2>
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 px-4 py-8 md:grid-cols-2 md:px-24 lg:grid-cols-[repeat(3,_minmax(200px,_300px))] lg:px-14">
            {team.map((member: TeamMember) => {
              return <TeamMemberCard member={member} key={member.firstName} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center px-16 py-8">
        <h3 className="text-4xl font-extrabold">OUR EXPERIENCE</h3>
        <div className="my-4 h-[5px] w-[80px] bg-primary-200"></div>
      </div>
      <div className="flex w-full flex-col items-center px-16 py-8">
        <div className="flex w-full flex-col items-center">
          <Image
            src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Firm-GymLaunch%201.png"
            alt="Gym Launch logo"
            height={400}
            width={400}
          ></Image>
          <h4 className="py-4 text-2xl font-bold">2016 — PRESENT </h4>
          <section className="text-center">
            After scaling his chain of gyms to 6 locations, Alex founded Gym
            Launch-- a service business that specialized in brick & mortar gym
            turnarounds. After almost two years, and 32+ turnarounds, the demand
            for their time outstripped their ability to fly on-site. They
            transformed the business from an in-person turnaround business to a
            licensing business. They began licensing their marketing, sales
            processes, pricing, retention, retail, and ascension systems to over
            4000+ brick & mortar facilities. The company scaled to over
            $2,300,000 per month within the first 12 months, with $17,000,000 in
            profit in their first full year of licensing. The business continues
            to service gyms across 13 countries.
          </section>
        </div>
        <div>
          <div className="mt-8 h-6 w-6 rounded-full bg-primary-200"></div>
          <div className="mx-[10px] h-24 w-1 translate-y-[-2px] bg-primary-200"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center px-16 py-8">
        <div className="flex w-full flex-col items-center">
          <Image
            src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Firm-PrestigeLabs%201.png"
            alt="Prestige Labs logo"
            height={400}
            width={400}
          ></Image>
          <h4 className="py-4 text-2xl font-bold">2018 — PRESENT</h4>
          <section className="text-center">
            After successfully replicating his gym model in thousands of gyms,
            Alex & Leila co-founded Prestige Labs, a sports nutrition company.
            They contracted the world&apos;s foremost expert on nutrition and
            supplementation Dr. Trevor Kashey. together they were able to custom
            formulate the most potent supplement line in the US (even being
            banned in many countries because the ingredients are not available
            over the counter.) The business exploded in revenue climbing to
            $1,700,000 per month within its first six months of operating. The
            company&apos;s growth hinged on 1) unimpeachable quality 2)
            aggressive affiliate commissions 3) a uniquely built payment
            processing and logistics back end that allowed brick & mortar
            facilities to realize more profit while foregoing the traditional
            cost of inventory.
          </section>
        </div>
        <div>
          <div className="mt-8 h-6 w-6 rounded-full bg-primary-200"></div>
          <div className="mx-[10px] h-24 w-1 translate-y-[-2px] bg-primary-200"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center px-16 py-8">
        <div className="flex w-full flex-col items-center">
          <Image
            src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Firm-ALAN%201.png"
            alt="A.L.A.N. logo"
            height={400}
            width={400}
          ></Image>
          <h4 className="py-4 text-2xl font-bold">2019 — PRESENT</h4>
          <section className="text-center">
            After successfully launching the licensing and supplement company,
            Leila, Alex, and Suzanne co-founded ALAN (Artificial Lead Automation
            & Nurture) a company based on automating the most arduous part of
            acquisition for brick & mortar businesses: working their leads.
            After 12 months of development, they launched the product with the
            sole intention of getting a higher percentage of leads to schedule
            and show without the need for human interaction. The company was a
            smashing success soaring to over $1,400,000 per month in the first
            six months after its launch. Its success hinged on: 1) its ability
            to deliver on its core promise - it gets 1.9x more leads to show
            than the average front desk clerk 2) Strong affiliate interests to
            generate demand 3) Very sticky monetization system
          </section>
        </div>
        <div>
          <div className="mt-8 h-6 w-6 rounded-full bg-primary-200"></div>
          <div className="mx-[10px] h-24 w-1 translate-y-[-2px] bg-primary-200"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center px-16 py-8">
        <div className="flex w-full flex-col items-center">
          <Image
            src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Firm-EnchantedFairies%201.png"
            alt="Enchanted Faries logo"
            height={400}
            width={400}
          ></Image>
          <h4 className="py-4 text-2xl font-bold">2020 — PRESENT</h4>
          <section className="text-center">
            We invested in these founders in mid-2020. At the time, they had an
            agency and 1 photography studio location. After breaking down the
            business, we co-founded a new company together with a new hybrid
            model for their brick-and-mortar location to expand with less
            operating overhead, and higher margins, while keeping charity as the
            primary driver of the company. Two years later, the company now has
            30+ thriving locations. Revenue has increased 30x in that period of
            time, and is growing faster each year. Enchanted Fairies is a
            wonderful company that we are proud to be associated with.
          </section>
        </div>
      </div>
    </div>
  );
};

TheTeam.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default TheTeam;
