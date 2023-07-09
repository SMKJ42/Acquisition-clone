import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const bookOptions = [] as string[];
const courseOptions = [] as string[];
const partnershipOptions = [] as string[];
const speakingOptions = [] as string[];
const theFirmOptions = ["Investment Thesis", "Why We Exist", "The Team"];
const careerOptions = ["Our Culture", "Open Jobs", "Careers Blog", "Join Us"];

export const PublicNavigation = (props: {
  dropDown: string | boolean;
  setDropDown: React.Dispatch<React.SetStateAction<string | boolean>>;
}) => {
  const { dropDown, setDropDown } = props;

  return (
    <nav className="nav flex h-20 flex-col items-center bg-primary-100">
      <div
        className="flex w-full justify-center"
        onMouseEnter={() => setDropDown(false)}
      >
        <Image
          src="https://www.acquisition.com/hs-fs/hubfs/ACQ_Web_Global-NavLogo%203.png?width=554&height=52&name=ACQ_Web_Global-NavLogo%203.png"
          alt="Acquisition.com logo"
          width={300}
          height={50}
          className="mt-2"
        ></Image>
      </div>
      <div className="navbar flex h-10 w-screen justify-center text-white">
        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * BOOKS
         */}

        <div className="my-2 flex-1 " onMouseEnter={() => setDropDown("books")}>
          <Link href="/books">Books</Link>
          {dropDown === "books" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {bookOptions.map((option) => (
                <SubNavButton key={option} parent="books" child={option} />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * Courses
         */}
        <div
          className="my-2 flex-1 "
          onMouseEnter={() => setDropDown("courses")}
        >
          <Link href="/courses">Courses</Link>
          {dropDown === "courses" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {courseOptions.map((option) => (
                <SubNavButton key={option} parent="courses" child={option} />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * Partnership
         */}
        <div
          className="my-2 flex-1 "
          onMouseEnter={() => setDropDown("partnership")}
        >
          <Link href="/">Partnership</Link>
          {dropDown === "partnership" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {partnershipOptions.map((option) => (
                <SubNavButton
                  key={option}
                  parent="partnership"
                  child={option}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * Speaking
         */}
        <div
          className="my-2 flex-1 "
          onMouseEnter={() => setDropDown("speaking")}
        >
          <Link href="/speaking">Speaking</Link>
          {dropDown === "speaking" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {speakingOptions.map((option) => (
                <SubNavButton key={option} parent="speaking" child={option} />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * The Firm
         */}
        <div
          className="my-2 flex-1 whitespace-nowrap"
          onMouseEnter={() => setDropDown("the_firm")}
        >
          <Link href="/the_firm">The Firm</Link>
          {dropDown === "the_firm" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {theFirmOptions.map((option) => (
                <SubNavButton key={option} parent="the_firm" child={option} />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>

        {/*
         * Careers
         */}
        <div
          className="my-2 flex-1 "
          onMouseEnter={() => setDropDown("careers")}
        >
          <Link href="/careers">Careers</Link>
          {dropDown === "careers" && (
            <div className="absolute flex flex-1 flex-col bg-primary-200">
              {careerOptions.map((option) => (
                <SubNavButton key={option} parent="careers" child={option} />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" onMouseEnter={() => setDropDown(false)}></div>
      </div>
    </nav>
  );
};

function SubNavButton(props: { parent: string; child: string }) {
  const router = useRouter();
  const { parent, child } = props;
  const parentLower = parent.toLowerCase();
  const childLower = child.toLowerCase().replace(/\s/g, "_");

  console.log(parentLower, childLower);

  return (
    <div
      onClick={() => void router.push(`/${parentLower}/${childLower}`)}
      className="border-l border-r border-t px-4 py-1 last:border-b hover:cursor-pointer"
    >
      <p className="hover:text-primary-300 hover:underline">{child}</p>
    </div>
  );
}
