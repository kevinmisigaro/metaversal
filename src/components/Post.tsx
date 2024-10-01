/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FiEye } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

interface PostProps {
  userId: number;
  name: string;
  userAvatar: string;
  userName: string;
  postText: string;
  likes: number;
  shares: number;
  views: number;
}

function UserPost({
  userAvatar,
  name,
  userName,
  postText,
  likes,
  shares,
  views,
  userId,
}: PostProps) {
  const router = useRouter();
  const navigateToProfile = () => {
    console.log(userId);
    router.push(`/profile/${userId}`)
  };

  return (
    <div className="border border border-gray-200 rounded-xl p-4 shadow-lg">
      <div className="flex items-start gap-x-4">
        <img
          src={userAvatar}
          className="max-w-14 rounded-full cursor-pointer"
          alt="..."
          onClick={navigateToProfile}
        />
        <div>
          <div className="flex flex-col">
            <div className="font-bold hover:underline cursor-pointer" onClick={navigateToProfile}>
              {name}
            </div>
            <div className="text-sm hover:underline cursor-pointer">
              @{userName}
            </div>
          </div>
          <div className="mt-4 text-sm">{postText}</div>
        </div>
      </div>
      <div className="mt-4 flex justify-start gap-x-5 border-t border-gray-300 pt-3">
        <div className="flex flex-row items-center gap-x-1 text-sm">
        <FiThumbsUp className="text-sm" /> {likes}
        </div>
        <div className="flex flex-row items-center gap-x-1 text-sm">
          <BsSend className="text-sm" /> {shares}
        </div>
        <div className="flex flex-row items-center gap-x-1 text-sm">
        <FiEye className="text-sm" /> {views}
        </div>
      </div>
    </div>
  );
}

export default UserPost;
