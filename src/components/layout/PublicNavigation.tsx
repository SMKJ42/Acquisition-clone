import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const bookOptions = [] as string[];
const courseOptions = [] as string[];
const partnershipOptions = [] as string[];
const speakingOptions = [] as string[];
const theFirmOptions = ["The Team", "Investment Thesis", "Why We Exist"];
const careerOptions = ["Our Culture", "Open Jobs", "Careers Blog", "Join Us"];

export const PublicNavigation = (props: {
  dropDown: string | boolean;
  setDropDown: React.Dispatch<React.SetStateAction<string | boolean>>;
}) => {
  const router = useRouter();
  const { dropDown, setDropDown } = props;

  return (
    <nav className="nav fixed flex h-20 w-full  items-center bg-primary-100 sm:flex-col">
      <div
        className="flex w-full justify-center "
        onMouseEnter={() => setDropDown(false)}
      >
        <Image
          src="https://www.acquisition.com/hs-fs/hubfs/ACQ_Web_Global-NavLogo%203.png?width=554&height=52&name=ACQ_Web_Global-NavLogo%203.png"
          alt="Acquisition.com logo"
          width={300}
          height={50}
          className="mt-2"
          loading="lazy"
          onClick={() => {
            void router.push("/the_firm/why_we_exist");
          }}
        />
      </div>
      <Mobile setDropDown={setDropDown} dropDown={dropDown} />
      <Desktop setDropDown={setDropDown} dropDown={dropDown} />
    </nav>
  );
};

function SubNavButton(props: { parent: string; child: string }) {
  const router = useRouter();
  const { parent, child } = props;
  const parentLower = parent.toLowerCase();
  const childLower = child.toLowerCase().replace(/\s/g, "_");

  return (
    <div
      onClick={() => void router.push(`/${parentLower}/${childLower}`)}
      className="border-l border-r border-t px-4 py-1 last:border-b hover:cursor-pointer"
    >
      <p className="hover:text-primary-300 hover:underline">{child}</p>
    </div>
  );
}

// *************** MOBILE NAVIGATION *****************

function Mobile(props: {
  setDropDown: React.Dispatch<React.SetStateAction<string | boolean>>;
  dropDown: string | boolean;
}) {
  const router = useRouter();
  const { setDropDown, dropDown } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {!open && (
        <div className="pr-8 text-white" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}
      {open && (
        <div className="absolute bottom-0 top-0 h-full w-full bg-primary-200">
          <div className="pr-8 text-white" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-12 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>TODO</div>
          </div>
        </div>
      )}
    </div>
  );
}

// *************** DESKTOP NAVIGATION *****************

function Desktop(props: {
  setDropDown: React.Dispatch<React.SetStateAction<string | boolean>>;
  dropDown: string | boolean;
}) {
  const router = useRouter();

  const { setDropDown, dropDown } = props;

  return (
    <div className="navbar hidden h-10 w-0 justify-center font-light text-white sm:flex sm:w-screen ">
      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * BOOKS
       */}

      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
        onMouseEnter={() => setDropDown("books")}
      >
        <Link href="/books">Books</Link>
        {dropDown === "books" && (
          <div className="absolute flex flex-1 flex-col bg-primary-200">
            {bookOptions.map((option) => (
              <SubNavButton key={option} parent="books" child={option} />
            ))}
          </div>
        )}
      </div>

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * Courses
       */}
      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
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

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * Partnership
       */}
      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
        onMouseEnter={() => setDropDown("partnership")}
      >
        <Link href="/partnership">Partnership</Link>
        {dropDown === "partnership" && (
          <div className="absolute flex flex-1 flex-col bg-primary-200">
            {partnershipOptions.map((option) => (
              <SubNavButton key={option} parent="partnership" child={option} />
            ))}
          </div>
        )}
      </div>

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * Speaking
       */}
      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
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

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * The Firm
       */}
      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
        onMouseEnter={() => setDropDown("the_firm")}
      >
        <Link href="/the_firm/the_team">The Firm</Link>
        {dropDown === "the_firm" && (
          <div className="absolute flex flex-1 flex-col bg-primary-200">
            {theFirmOptions.map((option) => (
              <SubNavButton key={option} parent="the_firm" child={option} />
            ))}
          </div>
        )}
      </div>

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>

      {/*
       * Careers
       */}
      <div
        className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
        onMouseEnter={() => setDropDown("careers")}
      >
        <Link
          href="/careers"
          onClick={() => void router.push("/careers/open_jobs")}
        >
          Careers
        </Link>
        {dropDown === "careers" && (
          <div className="absolute flex flex-1 flex-col bg-primary-200">
            {careerOptions.map((option) => (
              <SubNavButton key={option} parent="careers" child={option} />
            ))}
          </div>
        )}
      </div>

      <div
        className="hidden flex-1 sm:block"
        onMouseEnter={() => setDropDown(false)}
      ></div>
    </div>
  );
}
