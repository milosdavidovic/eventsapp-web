import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ hit }: any) => {
  console.log(hit);
  return (
    <Link
      href={`/events/${hit.objectID}`}
      className="card bg-base-100 shadow-xl h-100 cursor-pointer"
      role="link"
    >
      <figure className="w-full relative aspect-video">
        <Image
          src={hit.Image}
          alt={hit.Name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{hit.Name}</h2>
        <p className="prose-neutral">{hit.EventType}</p>
        <div>
          <p className="prose prose-sm">
            {new Date(hit.Date).toLocaleString()}
          </p>
          <p className="prose prose-sm">{hit.Location}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
