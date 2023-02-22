/* eslint-disable @next/next/no-img-element */
"use client";

import { Event } from "@/types/algolia/Event";
import Image from "next/image";
import React from "react";
import {
  MdOutlineIosShare,
  MdFavoriteBorder,
  MdCalendarToday,
  MdLocationOn,
  MdDirectionsBus,
  MdDirectionsRun,
  MdDirectionsBike,
  MdDirectionsCar,
} from "react-icons/md";
import { useHits } from "react-instantsearch-hooks-web";

const Page = ({ params }: { params: { id: string } }) => {
  const { hits } = useHits<Event>();
  const hit = hits.find((h) => h.objectID === params.id);

  if (!hit) return null;

  const date = new Date(hit.Date);

  return (
    <div className="text-black min-h-[300px] pb-48 mt-8">
      <div className="h-full md:mx-[10%] mx-4">
        <div className="h-128 md:pl-24 md:pr-24 rounded-3xl bg-slate-800 bg-opacity-70 w-full">
          <figure className="w-full relative aspect-video h-[50vh] ">
            <Image
              src={hit.Image as string}
              alt={hit.Name as string}
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>

        <div className="flex justify-between text-xl mb-4">
          <div className="text-warning">{date.toDateString()}</div>
          <div className="flex items-center">
            <div className="badge badge-info bg-opacity-40 text-indigo-900 font-bold">
              {hit.Cost} Event
            </div>
            <button className="text-warning bg-grey-light hover:bg-slate-200 font-bold px-2 py-2 rounded-full inline-flex items-center">
              <MdFavoriteBorder size="1.5rem" />
            </button>
            <button className="text-warning bg-grey-light hover:bg-slate-200 text-grey-darkest font-bold px-2 py-2  rounded-full inline-flex items-center">
              <MdOutlineIosShare size="1.5rem" />
            </button>
          </div>
        </div>

        <h1 className="text-4xl mb:text-5xl font-bold mb-8">{hit.Name}</h1>

        <p className="text-xl mb-4">{hit.Description}</p>

        <div className=" text-md mb-8">Event Type: {hit.EventType}</div>

        <div className="text-2xl mb-4">When and where:</div>

        <div className="flex gap-4 md:gap-8 bg-slate-100 rounded-xl px-8 py-4 w-fit text-black bg-opacity-80 mb-4">
          <div className="pl-12 relative">
            <div>Date and time</div>
            <div>{date.toLocaleDateString()}</div>
            <div>{date.toLocaleTimeString()}</div>
            <MdCalendarToday
              size="2rem"
              className="absolute top-1 left-1 text-warning"
            />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="pl-12 relative">
            <div>Location</div>
            <div>{hit.Location}</div>
            <MdLocationOn
              size="2rem"
              className="absolute top-1 left-1 text-warning"
            />
          </div>
        </div>

        <div className="md:w-[50%] mb-8">
          <img src="/google-dummy.webp" alt="Full width image" width={"100%"} />
          <div className="text-xl mb-4 text-center">How to get there</div>
          <div className="flex justify-around gap-4 mt-4">
            <div />
            <div className="flex gap-4 text-warning">
              <MdDirectionsCar size={32} />
              <div className="divider lg:divider-horizontal"></div>
              <MdDirectionsBus size={32} />
              <div className="divider lg:divider-horizontal"></div>
              <MdDirectionsRun size={32} />
              <div className="divider lg:divider-horizontal"></div>
              <MdDirectionsBike size={32} />
            </div>
            <div />
          </div>
        </div>

        <div className="text-2xl mb-4">About this event</div>
        <p className="md:w-[50%] mb-4">
          Bacon ipsum dolor amet laboris brisket eiusmod bresaola, sausage
          chicken ribeye incididunt cupidatat. Cupidatat qui jerky landjaeger,
          capicola sausage aute tail short loin jowl in cillum adipisicing. Anim
          chislic labore minim. Pork chop ullamco voluptate, minim do tongue
          officia jowl. Jowl filet mignon non pastrami picanha do excepteur
          pariatur. Labore pig irure leberkas pork belly duis mollit aliquip
          nulla andouille aute ea non shankle.
        </p>
        <p className="text-md font-bold mb-2">Agenda</p>
        <p>18:30 - 19:00 - Registration</p>
        <p>19:00 - 20:00 - Main thing</p>
        <p className="pb-8">20:00 - 23:00 - Networking</p>
      </div>
    </div>
  );
};

export default Page;
