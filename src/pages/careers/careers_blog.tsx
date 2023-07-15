import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { useState } from "react";

const posts = [{ id: "1", category: [""], src: "", alt: "" }];

const CareersBlog: NextPageWithLayout = () => {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className="w-full bg-texture">
      <div className="flex w-full flex-col items-center bg-primary-100 text-white">
        <h1 className="pb-4 pt-8 text-center text-4xl font-extrabold">
          BE THE MOST <br />
          <span className="text-primary-200">IMPRESSIVE CANDIDATE</span>
        </h1>
        <p className="text-2xl font-bold text-primary-100">
          Know the good stuff first
        </p>
        <div className="flex w-1/3 justify-center py-8">
          <div className="mr-4 rounded-full bg-primary-200 p-2 hover:bg-primary-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </div>
          <div className="ml-4 rounded-full bg-primary-200 p-2 hover:bg-primary-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
              fill="#fff"
            >
              {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-8 sm:grid-cols-2">
        <h2 className="col-span-1 flex w-full justify-center pt-8 text-4xl font-extrabold sm:col-span-2">
          All Posts
        </h2>
        <div className="flex w-full items-center justify-center py-8 sm:col-span-2">
          <div className="h-[5px] w-[80px] bg-primary-200 "></div>
        </div>
        <div className="flex flex-col sm:col-span-2">
          <p className="w-full pb-4 text-center">Filter by category: </p>
          <div className="flex w-full flex-wrap justify-center">
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Employee Experience
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Culture
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Talent Development
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Interviewing
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Skill Development
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              FeedBack
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Hiring
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Compensation
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              HiPo
            </button>
            <button className="mx-2 my-1 rounded-md  bg-gray-400 px-2 font-light text-white">
              Management
            </button>
          </div>
        </div>
        <div className="w-full py-8">
          {posts.map((post) => {
            const { category } = post;
            return (
              <div key={post.id} className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center">
                  <h3 className="text-xl font-bold">Post Title</h3>
                  <p className="font-light">Post Date</p>
                </div>
                <div className="w-full flex-row">
                  {category.map((cat) => {
                    return (
                      <p
                        key={cat}
                        className="bg-primary-300 px-2 py-1 font-light"
                      >
                        {cat}
                      </p>
                    );
                  })}
                </div>
                <p>Post Excerpt</p>
                <div className="flex w-full justify-center">
                  <button className="rounded-2xl bg-primary-200 px-4 py-2 text-white">
                    Read Article
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CareersBlog.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default CareersBlog;
