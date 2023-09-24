import HomeVideoContainer from "./HomeVideoContainer";
import ShortsVideoContainer from "./ShortsVideoContainer";
import ClientNavbar from "./navcomponents/clientnavbar";
import NavbarItems from "./navcomponents/navbaritems";
const Navbar = () => {
  return (
    <div>
      <div className="container flex flex-row w-full">
        <NavbarItems />
        <div className="container w-full h-screen ">
          <ClientNavbar />
          <div className="bodycontainer md:ml-[4rem] md:mt-[5rem] ">
          <HomeVideoContainer />
          <ShortsVideoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
