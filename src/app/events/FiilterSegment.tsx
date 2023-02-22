import React, { useState } from "react";
import {
  RefinementListProps,
  useRefinementList,
  useCurrentRefinements,
} from "react-instantsearch-hooks-web";

interface Props extends RefinementListProps {
  defaultCount: number;
}

const FilterSegment = (props: Props) => {
  const { attribute, defaultCount } = props;
  const { items, refine } = useRefinementList(props);
  const [isExpanded, setExpanded] = useState(false);

  const itemsToShow = isExpanded ? items : items.slice(0, defaultCount);
  const shouldShowToggler = items.length > defaultCount;

  const toggleExpanded = () => {
    setExpanded((s) => !s);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl text-neutral ">{attribute}</h2>
      {itemsToShow.map((item) => (
        <div key={item.label} className="form-control w-fit">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-warning"
              value={item.value}
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            <span className="text-black">{item.label}</span>
          </label>
        </div>
      ))}

      {shouldShowToggler ? (
        <p className="text-warning cursor-pointer" onClick={toggleExpanded}>
          {isExpanded ? "Show less" : "Show more"}
        </p>
      ) : null}
    </div>
  );
};

export default FilterSegment;
