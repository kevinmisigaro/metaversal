import { FiAlertTriangle } from "react-icons/fi";

function PostError() {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <FiAlertTriangle />
      <h4>Error loading posts</h4>
      <p>We&apos;re so sorry but it&apos; for the test.</p>
    </div>
  );
}

export default PostError;
