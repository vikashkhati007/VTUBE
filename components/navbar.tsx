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
          <HomeVideoContainer />
          <ShortsVideoContainer />
          <HomeVideoContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
