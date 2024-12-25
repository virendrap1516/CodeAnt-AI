import RepoItems from "../components/RepoItems";
import { repositories } from "../constant/mockData";
import refresh from "../assets/refresh.svg";
import plus from "../assets/plus.svg";

import { useState } from "react";

const Repositories = () => {
  const [originalRepository, setOriginalRepository] = useState(repositories);
  const [updateRepo, setUpdateRepo] = useState([]);
  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
    const repository = originalRepository.filter((repo) =>
      repo.name.includes(e.target.value.toLowerCase())
    );

    setUpdateRepo(repository);
  };

  return (
    <div className="  w-full md:py-4 md:px-3 p-0">
      <div className=" h-full w-full md:rounded-xl shadow-md ">
        <div className="w-full p-5 md:space-y-3 space-y-5">
          <div className="flex md:flex-row flex-col md:items-center justify-between gap-3 ">
            <div className="">
              <h4 className="font-semibold md:text-2xl  text-xl">
                Repositories
              </h4>
              <span className="lg:text-base sm:text-sm text-lg  ">
                33 total Repositories
              </span>
            </div>
            <div className="flex  items-center gap-3">
              <button className="cursor-pointer flex items-center justify-center gap-3  bg-[#FFFFFF] rounded-lg px-3 py-2  border-2 lg:text-base sm:text-sm text-base">
                <img src={refresh} />

                <span>Refresh All</span>
              </button>
              <button className="cursor-pointer flex items-center rounded-lg justify-center gap-3  bg-[#1570EF] text-white px-3 py-2  border-2 border-[#1556ef] lg:text-base sm:text-sm text-base">
                <img src={plus} />
                <span>Add Repository</span>
              </button>
            </div>
          </div>

          <div className="shadow-sm md:w-[366px] sm:w-[408px] w-full h-11  border rounded-lg flex items-center   pl-3">
            <label htmlFor="search" className="">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7188 16.8086C18.0703 17.1602 18.0703 17.6875 17.7188 18.0039C17.5781 18.1797 17.3672 18.25 17.1562 18.25C16.9102 18.25 16.6992 18.1797 16.5234 18.0039L11.8125 13.293C10.5469 14.3125 8.96484 14.875 7.27734 14.875C3.26953 14.875 0 11.6055 0 7.5625C0 3.55469 3.23438 0.25 7.27734 0.25C11.2852 0.25 14.5898 3.55469 14.5898 7.5625C14.5898 9.28516 14.0273 10.8672 13.0078 12.0977L17.7188 16.8086ZM1.6875 7.5625C1.6875 10.6914 4.18359 13.1875 7.3125 13.1875C10.4062 13.1875 12.9375 10.6914 12.9375 7.5625C12.9375 4.46875 10.4062 1.9375 7.3125 1.9375C4.18359 1.9375 1.6875 4.46875 1.6875 7.5625Z"
                  fill="#414651"
                />
              </svg>
            </label>

            <input
              id="search"
              type="text "
              placeholder="Search Repositories"
              value={search}
              onChange={handlerSearch}
              className="w-full h-full mx-3 border placeholder:text-gray-500 border-gray-200 outline-none focus:border-2  border-none  "
            />
          </div>
        </div>
        <div className="w-full">
          {(search ? updateRepo : originalRepository).map((repo, i) => (
            <div key={i} className="w-full">
              <hr />
              <RepoItems
                name={repo.name}
                visibility={repo.visibility}
                language={repo.language}
                size={repo.size}
                updatedAt={repo.updatedAt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
