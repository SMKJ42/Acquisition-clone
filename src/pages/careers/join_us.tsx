import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";

const posts = [{ id: "1" }];

const JoinUs: NextPageWithLayout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [skills, setSkills] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [resume, setResume] = useState("");
  const [socialProfile, setSocialProfile] = useState("");

  const handleFormSubmit = () => {
    alert("not handled");
  };

  return (
    <div className="bg-texture">
      <div className="w-full py-8 text-center">
        <h1 className="text-5xl font-extrabold">
          JOIN <span className="text-primary-200">MOZI TALENT</span>
        </h1>
        <p>Be first to see the newest career openings.</p>
      </div>
      <div className="w-full bg-primary-100 p-8 sm:px-16">
        <div className="bg-white pb-8 pt-16">
          <h2 className="text-center text-3xl font-extrabold">SIGN UP</h2>
          <div className="flex justify-center bg-white py-8">
            <div className="h-[5px] w-[80px] bg-primary-200"></div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
            className="grid gap-6 p-4 sm:grid-cols-2"
          >
            <div className="flex flex-col">
              <label className="flex justify-between">First Name *</label>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className="flex flex-col">
              <label className="flex justify-between">Last Name *</label>
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="flex flex-col">
              <label className="flex justify-between">Phone *</label>
              <input type="text" placeholder="Phone" required />
            </div>
            <div className="flex flex-col">
              <label className="flex justify-between">Email *</label>
              <input type="text" placeholder="Email" required />
            </div>
            <div className="flex flex-col  sm:col-span-2">
              <label className="flex justify-between ">Video Link</label>
              <input type="text" placeholder="https://example.com" required />
            </div>
            <div className="flex flex-col">
              <label className="flex justify-between">
                Skills & Expertise *
              </label>
              <select>
                <option value={undefined}>Please Select</option>
                <option value={"marketing"}>Marketing</option>{" "}
                <option value={"sales"}>Sales</option>{" "}
                <option value={"customer_success"}>Customer_success</option>{" "}
                <option value={"creative"}>Creative</option>{" "}
                <option value={"operations"}>Operations</option>{" "}
                <option value={"it_systems"}>It_systems</option>{" "}
                <option value={"finance"}>Finance</option>
                <option value={"legal_deal_structure"}>
                  Legal_deal_structure
                </option>
                <option value={"niche_industry_expert"}>
                  Niche_industry_expert (ex: supplements, auto-repair,
                  real-estate)
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="flex justify-around">
                Years of Experience *
              </label>
              <select required>
                <option value={undefined}>Please Select</option>
                <option value={"1_3"}>1-3 Years</option>
                <option value={"3_5"}>3-5 Years</option>
                <option value={"5_10"}>5-10 Years</option>
                <option value={"10_15"}>10-15 Years</option>
                <option value={"15_20"}>15-20 Years</option>
                <option value={"20_plus"}>20+ Years</option>
              </select>
            </div>
            <div className="flex flex-col items-center sm:col-span-2">
              <label>Resume/CV Upload *</label>
              <input type="file" required />
            </div>
            <div className="flex flex-col items-center sm:col-span-2">
              <label>Social Profile (LinkedIn, Facebook, etc.)</label>
              <input type="text" placeholder="https://example.com" required />
            </div>
            <div></div>
            <div className="flex justify-around sm:col-span-2">
              <button
                type="submit"
                className="rounded-xl bg-primary-100 px-8 py-4 text-white"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2>RECENT BLOG POSTS</h2>
        </div>
        <div>
          {posts.map((post) => {
            const { id } = post;
            return <PostCard key={id} />;
          })}
          <button>See All Blog Posts</button>
        </div>
      </div>
    </div>
  );
};

function PostCard() {
  return <></>;
}

JoinUs.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default JoinUs;
