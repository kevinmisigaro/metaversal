import HomeLayout from "@/components/layouts/HomeLayout";
import UserPost from "@/components/Post";
import { profileImgUrl } from "@/utils/constants";
import { Post } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export default function Home({ posts }: { posts: Post[] }) {
  const [data, setData] = useState<Post[]>(posts);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setData(posts);
    setIsLoading(false);
  }, [posts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeLayout>
      <h3 className="text-2xl mb-5">Suggested Posts</h3>
      <div className="grid grid-cols-1 gap-10 mb-5">
        {data.map((p) => (
          <UserPost
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
      <h3 className="text-2xl mt-8 mb-5">Recent</h3>
      <div className="grid grid-cols-1 gap-10 mb-5">
        {posts.map((p) => (
          <UserPost
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
    },
  };
}
