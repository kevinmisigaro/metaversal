function FeedLoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-600"></div>
      <p>Loading</p>
    </div>
  );
}

export default FeedLoadingIndicator;
