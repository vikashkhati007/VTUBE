import Image from "next/image";

const UserComments = () => {
  return (
    <>
      <div className=" flex justify-center gap-3 my-5 border border-white border-opacity-20 rounded-md p-2">
        <div className="image">
          <Image
            className="rounded-full"
            src={
              "https://yt3.ggpht.com/1081FnwcDqQLSFeesn-sIbgXqCytdjfoa_UhUDauX3FmtEZpzVKvIGO0Gkyt8DEmDaqHCq06MQ=s88-c-k-c0x00ffffff-no-rj"
            }
            width={40}
            height={40}
            alt="profile"
          />
        </div>
        <div className="userdeatils text-sm flex flex-col gap-1">
          <div className="usernameandtime flex gap-3 items-center">
            <p className="font-semibold">@anboojz</p>
            <span className="opacity-70 text-xs">2 month ago</span>
          </div>
          <h3>
            Can we just agree that we need to bring this vibe back. 10 years
            later and this song still hits different. Truly a masterpiece.
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserComments;
