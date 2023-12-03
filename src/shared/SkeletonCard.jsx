const SkeletonCard = () => {
  return (
    <div
      role="status"
      className="bg-primary border border-darkershadow animate-pulse p-4 md:p-6 ease rounded"
    >
      <div className="h-2.5 bg-primary rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-primary rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-primary rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-primary rounded-full dark:bg-gray-700"></div>
      <div className="flex items-center mt-4 space-x-3">
        <div>
          <div className="h-2.5 bg-primary rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div className="w-48 h-2 bg-primary rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonCard;
