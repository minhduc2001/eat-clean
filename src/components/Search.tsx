import React, { useState } from "react";

const Search = ({ onClose }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClose = () => {
    setSearchTerm("");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded-md text-black"
          />
          <button
            onClick={handleSearchClose}
            className="ml-2 p-2 text-gray-600 hover:text-gray-800"
          >
            Đóng
          </button>
        </div>
        {/* Hiển thị kết quả tìm kiếm ở đây */}
      </div>
    </div>
  );
};

export default Search;
