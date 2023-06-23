import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { schools, programs } from "@/app/utils/constants";
import checkInfo from "@/app/utils/checkinfo";

export default async function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [infoComplete, setInfoComplete] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      const complete = await checkInfo();
      setInfoComplete(complete === "true");
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    setShowModal(!infoComplete);
  }, [infoComplete]);

  return (
    <Dialog.Root defaultOpen={false} open={showModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=openx]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] font-medium">
            Complete your profile
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] text-sm leading-normal">
            We just need some more information before you can start using anon.
          </Dialog.Description>
          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter username"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
                  {" "}
                  <option disabled={true} selected>
                    Select your school
                  </option>
                  {schools.map((val, index) => (
                    <option value={val} key={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
                  {" "}
                  <option disabled={true} selected>
                    Select your program
                  </option>
                  {programs.map((val, index) => (
                    <option value={val} key={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Save changes
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
