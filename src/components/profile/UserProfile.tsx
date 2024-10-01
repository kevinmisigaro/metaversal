/* eslint-disable @next/next/no-img-element */
import { profileImgUrl } from "@/utils/constants";
import { Post, User } from "@/utils/interfaces";
import { LuMapPin } from "react-icons/lu";
import ActiveButton from "../buttons/ActiveButton";
import OutlineButton from "../buttons/OutlineButton";

function UserProfile({ user, posts }: { user: User; posts: Post[] }) {
  return (
    <div className="px-3 pt-3 border border-gray-300 rounded-lg bg-white">
      <div className="flex flex-row gap-x-4">
        <img
          src={profileImgUrl}
          className="h-16 w-16 rounded-full border-2 border-white"
          alt="..."
        />
        <div>
          <div className="flex flex-col items-start">
            <p className="hover:underline font-bold text-2xl">
              {user.firstName} {user.lastName}
            </p>
            <div className="flex flex-row gap-x-4">
              <small>@{user.username}</small>
              <div className="flex flex-row gap-x-1 items-center">
                <LuMapPin className="text-sm" />
                <small>
                  {user.address.city}, {user.address.country}
                </small>
              </div>
            </div>
            <div className="badge bg-blue-100 mt-2 text-blue-600 px-4 py-1 rounded-full">
              <span className="text-sm font-bold">
                {user.company.department}
              </span>
            </div>
            <div className="flex flex-row gap-x-4 items-start mt-3">
              <div className="flex flex-col">
                <h5 className="font-black text-lg">{posts.length}</h5>
                <small className="text-xs">POSTS</small>
              </div>
              <div className="flex flex-col">
                <h5 className="font-black text-lg">1,512</h5>
                <small className="text-xs">LIKES</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 flex flex-row gap-x-3 items-center py-3 mt-5">
        <ActiveButton text="Follow" />
        <OutlineButton text="Message" />
      </div>
    </div>
  );
}

export default UserProfile;
