import FollowGrid from "@/components/home/FollowGrid";
import SuggestedGrid from "@/components/home/SuggestedGrid";
import HomeLayout from "@/components/layouts/HomeLayout";
import UserPost from "@/components/Post";
import { profileImgUrl } from "@/utils/constants";
import { Post, User } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export default function Home({
  posts,
  users,
  recentPosts,
}: {
  posts: Post[];
  users: User[];
  recentPosts: Post[];
}) {
  const [data, setData] = useState<Post[]>(posts);
  const [userData, setuserData] = useState<User[]>(users);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setData(posts);
    setuserData(users);
    setIsLoading(false);
  }, [posts, users]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeLayout>
      <h3 className="text-2xl mb-5 font-roboto">Suggested Posts</h3>
      <SuggestedGrid data={data} />
      <div>
        <h3 className="text-2xl font-bold">Who to follow</h3>
        <FollowGrid userData={userData} />
      </div>
      <h3 className="text-2xl mt-8 mb-5">Recent</h3>
      <div className="grid grid-cols-1 gap-10 mb-5">
        {recentPosts.map((p) => (
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
        ))}
      </div>
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  //fetch users
  const usersList = await fetch("https://dummyjson.com/users?limit=4");
  const usersD = await usersList.json();
  const users = usersD.users;

  //fetch recent posts
  const recentposts = await fetch("https://dummyjson.com/posts?limit=10");
  const recentPostResponse = await recentposts.json();

  const recentP = recentPostResponse.posts;

  const recentPostsWithUserDetails = await Promise.all(
    recentP.map(async (post: Post) => {
      const resUser = await fetch(`https://dummyjson.com/users/${post.userId}`);
      const userData = await resUser.json();

      // Combine post and user data
      return {
        ...post,
        user: userData,
      };
    })
  );

  // Fetch all posts
  const resPosts = await fetch("https://dummyjson.com/posts?limit=2");
  const postsData = await resPosts.json();

  // Get an array of posts
  const posts = postsData.posts;

  // For each post, fetch user details based on the userId in the post
  const postsWithUserDetails = await Promise.all(
    posts.map(async (post: Post) => {
      const resUser = await fetch(`https://dummyjson.com/users/${post.userId}`);
      const userData = await resUser.json();

      // Combine post and user data
      return {
        ...post,
        user: userData,
      };
    })
  );

  // Return the combined data as props
  return {
    props: {
      posts: postsWithUserDetails,
      users: users,
      recentPosts: recentPostsWithUserDetails,
    },
  };
}
