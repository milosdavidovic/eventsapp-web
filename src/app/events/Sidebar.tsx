"use client";

import React from "react";
import FilterSegment from "./FiilterSegment";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col gap-6 pt-8 pl-8 text-neutral h-full w-full">
      <FilterSegment defaultCount={3} attribute="EventType" />
      <FilterSegment defaultCount={3} attribute="ActivityType" />
      <FilterSegment defaultCount={3} attribute="Cost" />
    </div>
  );
};

export default Sidebar;
