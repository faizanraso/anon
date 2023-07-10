import React from "react";

export default function CommentBox() {
  return (
    <div className="">
      <div className="flex flex-col gap-y-4 border-b border-gray-200 py-4 dark:border-neutral-700">
        <p className="text-sm">school name | @username</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris
          elit, feugiat a maximus sed, rhoncus nec sapien. Vivamus vitae
          sagittis libero, vel dictum justo. Nunc quis nunc non nisi mattis
          feugiat. Morbi placerat sem felis, id egestas nisi semper tincidunt.
          Praesent ac tristique risus, tempus interdum ex. Proin ut luctus
          tortor, interdum facilisis arcu. Sed eget volutpat nunc, eu pharetra
          dui. Phasellus vestibulum, neque vitae maximus pellentesque, ipsum leo
          auctor ligula, in maximus ex diam consequat nulla. Suspendisse auctor
          congue dui sed cursus.
        </p>
        <div className="flex flex-row gap-x-1">
          <svg
            width="15px"
            height="15px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-none dark:stroke-gray-300"
          >
            <path
              d="M12 6v6h6"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-none dark:stroke-gray-300"
            ></path>
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-none dark:stroke-gray-300"
            ></path>
          </svg>
          <p className="text-xs">Date</p>
        </div>
      </div>
    </div>
  );
}
