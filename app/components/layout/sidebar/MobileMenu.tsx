"use client";

import React from "react";

export default function MobileMenu() {
  function mobileMenu() {
    document.querySelector("#sidemenu")!.classList.toggle("hidden");
    document.querySelector("#sidemenu")!.classList.toggle("z-20");
  }

  return (
    <button
      onClick={() => mobileMenu()}
      className="fixed bottom-5 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-900 dark:text-yellow-400 dark:hover:bg-neutral-700 sm:hidden"
    >
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black transition-colors duration-150 dark:stroke-neutral-100 "
      >
        <path
          d="M3 5h18M3 12h18M3 19h18"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
}
