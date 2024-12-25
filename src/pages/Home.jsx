import MobileNav from "../components/MobileNav";
import Repositories from "../components/Repositories";

import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className=" w-full flex min-h-screen bg-[#FAFAFA]">
      <div>
        <div className="w-[242px] h-full hidden md:block ">
          <Sidebar />
        </div>
        <div className="fixed md:hidden block  h-[64px]  w-full ">
          <MobileNav />
        </div>
      </div>
      <div className="w-full md:p-0 pt-[64px] ">
        <Repositories />
      </div>
    </div>
  );
};

export default Home;
