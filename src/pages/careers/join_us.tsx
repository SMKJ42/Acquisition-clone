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
    <div>
      <div>
        <h1>
          JOIN <span className="text-primary-200">MOZI TALENT</span>
        </h1>
        <p>Be first to see the newest career openings.</p>
      </div>
      <div>
        <h2>SIGN UP</h2>
        <div className="flex justify-center bg-white pt-8">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <label>
            First Name *
            <input type="text" placeholder="First Name" required />
          </label>
          <label>
            Last Name *
            <input type="text" placeholder="Last Name" required />
          </label>
          <label>
            Phone *
            <input type="text" placeholder="Phone" required />
          </label>
          <label>
            Email *
            <input type="text" placeholder="Email" required />
          </label>
          <label>
            Video Link
            <input type="text" placeholder="https://example.com" required />
          </label>
          <label>
            Skills & Expertise *
            <select required>
              <option value={undefined}>Please Select</option>
              <option value={"marketing"}>Marketing</option>
              <option value={"sales"}>Sales</option>
              <option value={"customer_success"}>Customer Success</option>
              <option value={"creative"}>Creative</option>
              <option value={"operations"}>Operations</option>
              <option value={"systems"}>IT Systems</option>
              <option value={"finance"}>Finance</option>
              <option value={"legal_deal_structure"}>
                Legal, Deal Structure
              </option>
              <option value={"niche_industry_expert"}>
                Niche Industry Expert
              </option>
            </select>
          </label>
          <label>
            Years of Experience *
            <select required>
              <option value={undefined}>Please Select</option>
              <option value={"1_3"}>1-3 Years</option>
              <option value={"3_5"}>3-5 Years</option>
              <option value={"5_10"}>5-10 Years</option>
              <option value={"10_15"}>10-15 Years</option>
              <option value={"15_20"}>15-20 Years</option>
              <option value={"20_plus"}>20+ Years</option>
            </select>
          </label>
          <label>
            Resume/CV Upload *
            <input type="file" required />
          </label>
          <label>
            Social Profile (LinkedIn, Facebook, etc.)
            <input type="text" placeholder="https://example.com" required />
          </label>
          <button type="submit">Submit Application</button>
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
  );
};

function PostCard() {
  return <></>;
}

JoinUs.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default JoinUs;
