const index = () => {
  return (
    <nav
      id="header"
      className="h-20 flex items-center justify-center font-inter"
    >
      <div className="relative group">
        <button
          id="dropdown-button"
          className="inline-flex justify-center w-full p-2 text-2xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          <span className="mr-2 font-bold">Xiaomi Phones</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          className="text-base hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
        >
          <a
            href="/xiaomi"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
          >
            Xiaomi Phones
          </a>
          <a
            href="/redmi"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
          >
            Redmi Phones
          </a>
          <a
            href="/poco"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
          >
            Poco Phones
          </a>
        </div>
      </div>
    </nav>
  );
};

export default index;
