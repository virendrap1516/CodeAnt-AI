import database from "../assets/database.svg";

const RepoItems = ({ name, visibility, language, size, updatedAt }) => {
  return (
    <div className="md:h-[108px] sm:h-[88px]  py-2 w-full flex  items-center  hover:bg-[#F5F5F5] px-5 ">
      <div className="w-full  space-y-3">
        <div className="flex items-center  gap-3 ">
          <h5 className="font-semibold sm:text-xl text-lg">{name}</h5>
          <div className="sm:w-[65px] sm:h-[24px] w-12 h-5 sm:text-sm text-xs border-[#B2DDFF] bg-[#EFF8FF] border  text-[#175CD3] flex items-center justify-center rounded-full">
            <span>{visibility}</span>
          </div>
        </div>
        <div className="flex items-center sm:gap-10 gap-6">
          <div className="flex items-center gap-2">
            <span className="md:text-base sm:text-sm text-xs">{language}</span>

            <span>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1570EF" />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={database} />
            <span className="md:text-base sm:text-sm text-xs">{size}</span>
          </div>
          <div>
            <span className="md:text-base sm:text-sm text-xs">{updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItems;
