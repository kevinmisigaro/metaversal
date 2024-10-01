import SuggestedGrid from "@/components/home/SuggestedGrid";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import UserProfile from "@/components/profile/UserProfile";
import { Post, User } from "@/utils/interfaces";

function Index({ userDetails, posts }: { userDetails: User; posts: Post[] }) {
  return (
    <ProfileLayout>
      <UserProfile
       user={userDetails}
       posts={posts}
      />

      <h3 className="font-bold text-xl mt-5 mb-3">Recent</h3>
      <SuggestedGrid data={posts} />
    </ProfileLayout>
  );
}

export async function getServerSideProps(context: {
  params: { userId: string };
}) {
  const userId = context.params.userId;

  const userRes = await fetch(`https://dummyjson.com/users/${userId}`);
  const userDetails = await userRes.json();

  const postsRes = await fetch(`https://dummyjson.com/users/${userId}/posts`);
  const postArray = await postsRes.json();

  const posts = postArray.posts;

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

  return { props: { userDetails, posts: postsWithUserDetails } };
}

export default Index;
