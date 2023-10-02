import ClientNavbar from "@/components/navcomponents/clientnavbar"
import NavbarItems from "@/components/navcomponents/navbaritems"
import SearchVideoContainer from "@/components/search/SearchVideoContainer"

interface PropsType{
  params: {
    search: string
  }
}
const page = ({params}:PropsType) => {
  return (
    <div className="container flex flex-row w-full">
    <NavbarItems />
    <div className="container w-full h-screen ">
      <ClientNavbar/>
      <div className="bodycontainer md:ml-[4rem] md:mt-[5rem] ">
        <SearchVideoContainer query={params.search}/>
      </div>
    </div>
  </div>
  )
}

export default page
