/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

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

    const router = useRouter()
    const navigateToProfile = () => router.push(`/profile/${userId}`)

  return (
    <div className="flex flex-row gap-x-4 px-3 py-3 border border-gray-300 rounded-lg bg-white">
      <img src={userAvatar} className="max-w-14 rounded-full" alt="..." onClick={navigateToProfile} />
      <div>
        <div className="flex flex-col items-start">
          <p className="hover:underline" onClick={navigateToProfile}>{name}</p>
          <small>@{userName}</small>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserCard;
