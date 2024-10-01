import { Post } from "@/utils/interfaces";
import UserPost from "../Post";
import { profileImgUrl } from "@/utils/constants";

function SuggestedGrid({ data }: { data: Post[] }) {
  return (
    <div className="grid grid-cols-1 gap-10 mb-5">
      {data.map((p) => (
        <UserPost
        userId={p.user.id}
          userAvatar={profileImgUrl}
          userName={p.user.username}
          views={p.views}
          likes={p.reactions.likes}
          postText={p.body}
          shares={5}
          name={`${p.user.firstName} ${p.user.lastName}`}
          key={p.id}
        />
      ))}
    </div>
  );
}

export default SuggestedGrid;
