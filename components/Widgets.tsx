import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function Widgets() {
  return (
    <div className="mt-2 px-2">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="twitter"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none" //flex-1 input will take all available space
        />
      </div>
    </div>
  );
}

export default Widgets;
