export default function IndexRoute() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="flex items-center h-12 px-3 text-white shadow-md font-title">
          Dashboard
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 font-medium text-gray-300">
          <p className="text-white">Friends</p>
        </div>
      </div>
      <div className=" flex-1 flex flex-col bg-gray-700"></div>
    </>
  );
}
