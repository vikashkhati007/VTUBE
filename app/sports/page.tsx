import SportVideoContainer from "@/components/SportsVideoContainer";
import ClientNavbar from "@/components/navcomponents/clientnavbar";
import NavbarItems from "@/components/navcomponents/navbaritems";
const Navbar = () => {
  return (
    <div>
      <div className="container flex flex-row w-full">
        <NavbarItems />
        <div className="container w-full h-screen ">
          <ClientNavbar width={""} />
          <div className="bodycontainer md:ml-[4rem] md:mt-[5rem] ">
            <SportVideoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
