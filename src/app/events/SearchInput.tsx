"use client";

import { useHits, useSearchBox } from "react-instantsearch-hooks-web";

const CustomInput = () => {
  const { refine, query } = useSearchBox();

  const handleInputChange = (event: any) => {
    refine(event.target.value);
  };

  return (
    <div className="form-control mt-4 mb-2">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          onChange={handleInputChange}
          value={query}
          className="input input-bordered w-full bg-slate-100 text-neutral input-warning"
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

function SearchInput() {
  return <CustomInput />;
}

export default SearchInput;
