const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-[#131921]/90 shadow-md rounded-xl border border-gray-300 border-4 flex flex-col overflow-hidden">
      <div className="bg-gray-300 dark:bg-gray-700 w-full h-48"></div>
      <div className="p-4 flex-grow space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      </div>
      <div className="p-4 pt-0 flex gap-3">
        {/* Simulate buttons */}
        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
