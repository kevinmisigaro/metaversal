import { ReactNode } from "react";
import ProfileHeader from "../ProfileHeader";

function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#f8fbfa] h-full font-roboto">
      <ProfileHeader />
      <div className="px-5 md:px-0 max-w-2xl mx-auto">
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
