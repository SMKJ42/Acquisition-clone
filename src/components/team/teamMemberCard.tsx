import Image from "next/image";
import { useRouter } from "next/router";

interface TeamMember {
  member: {
    firstName: string;
    lastName: string;
    suffix: string | null;
    role: string;
    title: string | null;
    profileImage: string;
    bio: (string | undefined)[];
  };
}

export const TeamMemberCard = ({ member }: TeamMember) => {
  const router = useRouter();

  return (
    <div className="team-member-card flex flex-col items-center text-ellipsis text-center">
      <Image
        src={member.profileImage}
        alt={member.firstName}
        width={300}
        height={300}
      />
      <div className="mb-4 flex flex-col items-center font-bold">
        <h3 className="text-2xl text-primary-200">
          {`${member.firstName}
           ${member.lastName}`}
        </h3>
        <p className="h-8 text-lg leading-5">
          {member.role}
          {member.title && ","} <br /> {member.title ? member.title : ""}
        </p>
      </div>
      <button
        onClick={() => {
          void router.push(
            `/the_firm/the_team/${member.firstName}_${member.lastName}}`
          );
          return;
        }}
        className="rounded-xl bg-primary-200 px-8 py-2 text-white"
      >
        About {`${member.firstName}`}
      </button>
    </div>
  );
};
