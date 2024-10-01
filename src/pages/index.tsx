import PostError from "@/components/errors/PostError";
import UserError from "@/components/errors/UserError";
import FollowGrid from "@/components/home/FollowGrid";
import SuggestedGrid from "@/components/home/SuggestedGrid";
import HomeLayout from "@/components/layouts/HomeLayout";
import FeedLoadingIndicator from "@/components/loading/FeedLoadingIndicator";
import UserPost from "@/components/Post";
import { apiUrl, profileImgUrl } from "@/utils/constants";
import { fetchData } from "@/utils/functions";
import { Post, User } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export default function Home({
  posts,
  users,
  recentPosts,
}: {
  posts: Post[] | null;
  users: User[] | null;
  recentPosts: Post[] | null;
}) {
  const [suggestedPosts, setSuggestedPosts] = useState<Post[] | null>();
  const [userData, setuserData] = useState<User[] | null>();
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const [errors, setError] = useState({
    recentPosts: false,
    users: false,
    suggestedPosts: false,
  });

  useEffect(() => {
    if (recentPosts === null) {
      setError({
        ...errors,
        recentPosts: true,
      });
    }

    if (users === null) {
      setError({
        ...errors,
        users: true,
      });
    } else {
      setuserData(users);
    }

    if (posts === null) {
      setError({
        ...errors,
        suggestedPosts: true,
      });
    } else {
      setSuggestedPosts(posts);
    }

    setIsLoading(false);
  }, []);

  return (
    <HomeLayout>
      {isLoading ? (
        <FeedLoadingIndicator />
      ) : (
        <>
          <h3 className="text-2xl mb-5 font-roboto">Suggested Posts</h3>
          {errors.suggestedPosts ? (
            <PostError />
          ) : (
            <SuggestedGrid data={suggestedPosts ?? []} />
          )}
          <div>
            <h3 className="text-2xl font-bold">Who to follow</h3>
            {errors.users ? (
              <UserError />
            ) : (
              <FollowGrid userData={userData ?? []} />
            )}
          </div>
          <h3 className="text-2xl mt-8 mb-5">Recent</h3>
          <div className="grid grid-cols-1 gap-10 mb-5">
            {errors.recentPosts ? (
              <PostError />
            ) : (
              recentPosts?.map((p) => (
                <UserPost
                  userId={p.user.id}
                  name={`${p.user.firstName} ${p.user.lastName}`}
                  views={p.views}
                  likes={p.reactions.likes}
                  postText={p.body}
                  shares={5}
                  userAvatar={profileImgUrl}
                  userName={p.user.username}
                  key={p.id}
                />
              ))
            )}
          </div>
        </>
      )}
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  
  const fetchPostWithUserDetails = async (post: Post) => {
    const userData = await fetchData(`${apiUrl}/users/${post.userId}`);
    return userData ? { ...post, user: userData } : null;
  };

  const [usersData, recentPostsData, postsData] = await Promise.all([
    fetchData(`${apiUrl}/users?limit=4`),
    fetchData(`${apiUrl}/posts?limit=10`),
    fetchData(`${apiUrl}/posts?limit=2`)
  ]);

  const users = usersData?.users || null;
  
  const recentPosts = recentPostsData?.posts
    ? await Promise.all(recentPostsData.posts.map(fetchPostWithUserDetails))
    : null;

  const posts = postsData?.posts
    ? await Promise.all(postsData.posts.map(fetchPostWithUserDetails))
    : null;

  return {
    props: {
      posts,
      users,
      recentPosts,
    },
  };
}
