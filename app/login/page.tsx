"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Login() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "authenticated") {
    redirect("/home");
  }

  function loginWithGithub() {
    signIn("github", { callbackUrl: `${window.location.origin}/home` });
  }

  async function loginWithGoogle() {
    signIn("google", { callbackUrl: `${window.location.origin}/home` });
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cyan-300 via-sky-500 to-blue-800">
      <div className="mx-auto my-auto w-9/12 max-w-screen-xl rounded-xl bg-white px-4 py-16 shadow drop-shadow-xl sm:px-6 md:w-6/12 lg:w-4/12 lg:px-8">
        <div className="flex items-center justify-center gap-x-2">
          <div>
            <svg
              width="35px"
              height="35px"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="fill-none"
            >
              <path
                d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.506 5.506 0 0112 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"
                className="stroke-black dark:stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                className="stroke-black dark:stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>

          <p className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
            anon
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            aria-label="Continue with google"
            role="button"
            className="mt-10 flex items-center rounded-lg border border-gray-900 px-7 py-3.5 transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
            onClick={() => loginWithGoogle()}
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="ml-4 text-sm font-medium text-gray-900">
              Continue with Google
            </p>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            aria-label="Continue with google"
            role="button"
            className="mt-3 flex items-center rounded-lg border border-gray-900 px-7 py-3.5 transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
            onClick={() => loginWithGithub()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p className="ml-4 text-sm font-medium text-gray-900">
              Continue with Github
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
