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
  return (
    <div className="flex flex-row gap-x-4 px-3 py-3 border border-gray-300 rounded-lg bg-white">
      <img src={userAvatar} className="max-w-14 rounded-full" alt="..." />
      <div>
        <div className="flex flex-col items-start">
          <p>{name}</p>
          <small>@{userName}</small>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserCard;
