/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import OutlineButton from "./buttons/OutlineButton";

function UserCard({
  userAvatar,
  name,
  userName,
  userId,
}: {
  userAvatar: string;
  name: string;
  userName: string;
  userId: number;
}) {
  const router = useRouter();
  const navigateToProfile = () => router.push(`/profile/${userId}`);

  return (
    <div className="grid grid-cols-4 items-center px-4 py-3 border border-gray-300 rounded-lg bg-white">
      <img
        src={userAvatar}
        className="max-w-14 rounded-full"
        alt="..."
        onClick={navigateToProfile}
      />
      <div className="col-span-2">
        <div className="flex flex-col items-start">
          <p
            className="hover:underline font-[800] cursor-pointer"
            onClick={navigateToProfile}
          >
            {name}
          </p>
          <small>@{userName}</small>
        </div>
      </div>
      <OutlineButton text="Follow" />
    </div>
  );
}

export default UserCard;
