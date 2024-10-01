import { FiAlertTriangle } from "react-icons/fi";

function PostError() {
  return (
    <div className="flex flex-col py-5 my-3 items-center gap-y-5 bg-white border border-gray-200">
      <FiAlertTriangle className="text-5xl" />
      <h4>Error loading posts</h4>
      <p>We&apos;re so sorry but it&apos; for the test.</p>
    </div>
  );
}

export default PostError;
