import { useRouter } from "next/router";
import { IoChevronBackOutline } from "react-icons/io5";

function ProfileHeader() {
  const router = useRouter();
  const returnBack = () => router.back();

  return (
    <div className="w-full bg-white py-3 flex flex-row items-center border-b border-gray-200 shadow px-4">
      <div className="basis-1/12">
        <IoChevronBackOutline className="cursor-pointer" onClick={returnBack} />
      </div>
      <div className="basis-11/12 text-center">
        <h1 className="text-xl font-black ">Profile</h1>
      </div>
    </div>
  );
}

export default ProfileHeader;
