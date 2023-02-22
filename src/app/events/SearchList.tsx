"use client";

import React from "react";
import EventCard from "./EventCard";
import {
  MdFilterAlt,
  MdKeyboardArrowDown,
  MdDisabledByDefault,
} from "react-icons/md";
import { useSidebar } from "@/contexts/SidebarContext";
import SearchInput from "./SearchInput";
import {
  useClearRefinements,
  useCurrentRefinements,
  useInfiniteHits,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

const SearchList = () => {
  const { toggleSidebar } = useSidebar();
  const { items, refine } = useCurrentRefinements();
  const { refine: clear } = useClearRefinements();
  const { hits, showMore, isLastPage } = useInfiniteHits();

  const refinements = items.reduce((acc: any, cur) => {
    return [...acc, ...cur.refinements];
  }, []);

  return (
    <div className="relative">
      <SearchInput />
      <div className="flex gap-2 mb-4 overflow-auto pb-3 relative">
        <button
          className="lg:hidden btn btn-outline btn-xs gap-2 rounded-full"
          onClick={toggleSidebar}
        >
          <MdFilterAlt />
          Filter
          <MdKeyboardArrowDown />
        </button>

        {refinements.map((item: any) => (
          <button
            key={item.label}
            className="btn btn-outline btn-xs btn-primary gap-2 rounded-full"
            onClick={() => {
              refine(item);
            }}
          >
            <MdDisabledByDefault />
            {item.label}
          </button>
        ))}

        <button
          className={`btn btn-outline btn-xs btn-error gap-2 rounded-full ${
            refinements.length || "invisible"
          }`}
          onClick={clear}
        >
          <MdDisabledByDefault />
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {hits.map((data, i) => (
          <EventCard key={i} hit={data} />
        ))}
      </div>
      {!isLastPage ? (
        <div className="flex justify-around mt-2">
          <button
            className="btn btn-outline btn-xs btn-primary gap-2"
            onClick={showMore}
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SearchList;
