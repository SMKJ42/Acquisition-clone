import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { TeamMemberCard } from "~/components/team/teamMemberCard";
import team from "~/utils/staticData/bios";

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
  );
};

TheTeam.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default TheTeam;
