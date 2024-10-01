import { User } from "@/utils/interfaces";
import UserCard from "../UserCard";
import { profileImgUrl } from "@/utils/constants";

function FollowGrid({ userData }: { userData: User[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-8 my-4">
      {userData.map((u) => (
        <UserCard
          key={u.id}
          userAvatar={profileImgUrl}
          name={`${u.firstName} ${u.lastName}`}
          userName={u.username}
          userId={u.id}
        />
      ))}
    </div>
  );
}

export default FollowGrid;
