import { ReactNode } from "react";
import ProfileHeader from "../ProfileHeader";

function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#f8fbfa] h-full">
      <ProfileHeader />
      <div className="max-w-2xl mx-auto">
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
