import Icon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        autoComplete="off"
        type="text"
        id="default-search"
        className="pl-10 
      border border-gray-200 dark:placeholder:text-gray-400 dark:border-gray-700 bg-white focus:border-transparent focus:ring-4 focus:ring-blue-300 focus:ring-offset-0 outline-none w-full rounded-lg text-sm text-gray-900 dark:text-gray-200 md:text-base dark:focus:ring-blue-500
      dark:bg-slate-800
      "
        placeholder="search user..."
      />
    </div>
  );
};

export default SearchInput;
