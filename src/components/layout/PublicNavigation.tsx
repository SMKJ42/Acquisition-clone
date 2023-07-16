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
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`nav z-100  h-20 w-full bg-primary-100 text-center sm:flex sm:flex-col`}
    >
      <div className="">
        <div
          className="bg-primary-00 flex w-full justify-center"
          onMouseEnter={() => setDropDown(false)}
        >
          <div className="flex w-full justify-center">
            <Image
              src="https://www.acquisition.com/hs-fs/hubfs/ACQ_Web_Global-NavLogo%203.png?width=554&height=52&name=ACQ_Web_Global-NavLogo%203.png"
              alt="Acquisition.com logo"
              width={250}
              height={20}
              className="max-h-[40px] w-auto pt-4"
              loading="lazy"
              onClick={() => {
                void router.push("/the_firm/why_we_exist");
              }}
            />
          </div>
          {!open && (
            <div className="mr-6 text-white sm:hidden">
              <div onClick={() => setOpen(true)}>
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
            </div>
          )}
        </div>
        <Mobile
          setDropDown={setDropDown}
          dropDown={dropDown}
          open={open}
          setOpen={setOpen}
        />
        <Desktop setDropDown={setDropDown} dropDown={dropDown} />
      </div>
    </nav>
  );
};

function SubNavButton(props: { parent: string; child: string }) {
  const { parent, child } = props;
  const parentLower = parent.toLowerCase();
  const childLower = child.toLowerCase().replace(/\s/g, "_");

  return (
    <Link
      href={`/${parentLower}/${childLower}`}
      className="desktop-nav hover:text-primary-300 hover:underline"
    >
      <div className="border-l border-r border-t px-4 py-1 last:border-b hover:cursor-pointer">
        {child}
      </div>
    </Link>
  );
}

function MiniSubNavButton(props: {
  parent: string;
  child: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { parent, child, setOpen } = props;
  const parentLower = parent.toLowerCase();
  const childLower = child.toLowerCase().replace(/\s/g, "_");

  return (
    <div className="px-4 py-1 text-sm font-thin hover:cursor-pointer">
      <Link
        onClick={() => {
          setOpen(false);
        }}
        href={`/${parentLower}/${childLower}`}
        className="hover:text-primary-300 hover:underline"
      >
        {child}
      </Link>
    </div>
  );
}
// *************** MOBILE NAVIGATION *****************

function Mobile(props: {
  setDropDown: React.Dispatch<React.SetStateAction<string | boolean>>;
  dropDown: string | boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setDropDown, dropDown, open, setOpen } = props;

  return (
    <div className={`w-fit sm:hidden`}>
      {open && (
        // <div className="absolute top-0 flex h-fit w-full justify-center bg-primary-200">
        <div className="absolute top-0 flex h-fit w-full justify-center bg-primary-200">
          <div className="flex flex-1" onMouseOver={() => setDropDown(false)} />
          <div className="flex w-fit flex-col items-center text-white">
            <div onClick={() => setOpen(false)}>
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
            </div>

            {/*
             * BOOKS
             */}

            <div
              className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
              onMouseOver={() => {
                if (!dropDown && dropDown !== "books") {
                  setDropDown(false);
                } else return;
              }}
              onClick={() => {
                if (dropDown !== "books") {
                  setDropDown("books");
                } else {
                  setDropDown(false);
                }
              }}
            >
              <div className="flex w-full justify-center">
                <Link href="/books" onClick={() => setOpen(false)}>
                  Books
                </Link>
                {bookOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "books" && (
                <div className="mt-2 w-full text-start">
                  {bookOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="books"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*
             * Courses
             */}
            <div
              className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
              onMouseOver={() => {
                if (dropDown && dropDown !== "courses") {
                  setDropDown(false);
                } else return;
              }}
              onClick={() => {
                if (dropDown !== "courses") {
                  setDropDown("courses");
                } else {
                  setDropDown(false);
                }
              }}
            >
              <div className="flex w-full justify-center">
                <Link href="/courses" onClick={() => setOpen(false)}>
                  Courses
                </Link>
                {courseOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "courses" && (
                <div className="mt-2 w-full text-start">
                  {courseOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="courses"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*
             * Partnership
             */}
            <div
              className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
              onMouseOver={() => {
                if (dropDown && dropDown !== "partnership") {
                  setDropDown(false);
                } else return;
              }}
              onClick={() => {
                if (dropDown !== "partnership") {
                  setDropDown("partnership");
                } else {
                  setDropDown(false);
                }
              }}
            >
              <div className="flex w-full justify-center">
                <Link href="/partnership" onClick={() => setOpen(false)}>
                  Partnership
                </Link>
                {partnershipOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "partnership" && (
                <div className="mt-2 w-full text-start">
                  {partnershipOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="partnership"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*
             * Speaking
             */}
            <div
              className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline"
              onMouseOver={() => {
                if (dropDown && dropDown !== "speaking") {
                  setDropDown(false);
                } else return;
              }}
              onClick={() => {
                if (dropDown !== "speaking") {
                  setDropDown("speaking");
                } else {
                  setDropDown(false);
                }
              }}
            >
              <div className="flex w-full justify-center">
                <Link
                  href="/speaking"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Speaking
                </Link>
                {speakingOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "speaking" && (
                <div className="mt-2 w-full text-start">
                  {speakingOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="speaking"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*
             * The Firm
             */}
            <div className="my-2 flex-1 whitespace-nowrap underline-offset-2 hover:underline">
              <div className="flex w-full justify-center">
                <button
                  onMouseOver={() => {
                    if (dropDown && dropDown !== "the_firm") {
                      setDropDown(false);
                    } else return;
                  }}
                  onClick={() => {
                    if (dropDown !== "the_firm") {
                      setDropDown("the_firm");
                    } else {
                      setDropDown(false);
                    }
                  }}
                >
                  The Firm
                </button>
                {theFirmOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "the_firm" && (
                <div className="mt-2 w-full text-start">
                  {theFirmOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="the_firm"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*
             * Careers
             */}
            <div className="my-2 inline w-full whitespace-nowrap underline-offset-2 hover:underline">
              <div className="flex w-full justify-center">
                <button
                  onMouseOver={() => {
                    if (dropDown && dropDown !== "careers") {
                      setDropDown(false);
                    } else return;
                  }}
                  onClick={() => {
                    if (dropDown !== "careers") {
                      setDropDown("careers");
                    } else {
                      setDropDown(false);
                    }
                  }}
                >
                  Careers
                </button>
                {careerOptions.length !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {dropDown === "careers" && (
                <div className="mt-2 w-full text-start">
                  {careerOptions.map((option) => (
                    <MiniSubNavButton
                      setOpen={setOpen}
                      key={option}
                      parent="careers"
                      child={option}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-1" onMouseOver={() => setDropDown(false)} />
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
        <Link href="/careers/open_jobs">Careers</Link>
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
