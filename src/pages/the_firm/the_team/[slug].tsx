import { type ReactElement, useEffect, useState } from "react";
import type { NextPageWithLayout } from "../../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import team from "~/utils/staticData";
import { useRouter } from "next/router";
import Image from "next/image";
import { CallToAction } from "~/components/shared/CallToAction";

interface TeamMember {
  firstName: string;
  lastName: string;
  suffix: string | null;
  role: string;
  title: string | null;
  profileImage: string;
  bannerImage: string | null;
  bio: (string | undefined)[];
}

const TeamMemberBio: NextPageWithLayout = () => {
  const router = useRouter();

  const [member, setMember] = useState<TeamMember | undefined>(undefined);
  const slug = router.query.slug as string[] | string;

  //this is a hacky way to get the member data from the slug
  useEffect(() => {
    if (slug === undefined) return;
    const name =
      typeof slug === "string" ? slug.split("_") : slug.join().split("_");
    const { firstName, lastName } = { firstName: name[0], lastName: name[1] };

    /*
     *I was getting a left bracket at the end of the slug, this sanitizes the name on client side
     */
    const sanFirst = firstName && firstName.replace(/[^\w\s]/gi, "");
    const sanLast = lastName && lastName.replace(/[^\w\s]/gi, "");
    const query = team.find(
      (member: TeamMember) =>
        member.firstName === sanFirst && member.lastName === sanLast
    );
    if (query !== undefined) {
      setMember(query as TeamMember);
    } else {
      void router.push("/404");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (member !== undefined) {
    return (
      <div>
        <div className="flex w-full flex-wrap justify-center bg-primary-200 px-8">
          {member.bannerImage !== null ? (
            <Image
              src={member.bannerImage}
              alt={member.firstName}
              width={300}
              height={300}
              loading="lazy"
            />
          ) : (
            member.profileImage !== null && (
              <div className="m-2">
                <Image
                  src={member.profileImage}
                  alt={member.firstName}
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </div>
            )
          )}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="mt-4 text-5xl font-extrabold text-white">
              {member.firstName} <br /> {member.lastName}
            </h2>
            <p className="mb-8 mt-2 h-8 text-xl font-semibold leading-5">
              {member.role}, <br /> {member.title ? member.title : ""}
            </p>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-black"></div>
        </div>
        <div className="mb-4 flex flex-col items-center">
          {member.bio.map((paragraph: string | undefined, index: number) => {
            return (
              <p
                key={index}
                className="m-2 w-3/4 px-4 py-2 text-center font-light"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
        <CallToAction />
      </div>
    );
  } else {
    return <></>;
  }
};

TeamMemberBio.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default TeamMemberBio;
