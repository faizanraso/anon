import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { programs, schools } from "@/app/utils/constants";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function Modal() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="m-0 text-[17px] font-medium">
            Update Profile
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal">
            We need some more information before you can start using anon.
          </AlertDialog.Description>
          <form
            onSubmit={(event) => {
              wait().then(() => setOpen(false));
              event.preventDefault();
            }}
          >
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                required
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px]"
                htmlFor="school"
              >
                School
              </label>
              <select
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] border-0 px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="program"
                required
              >
                <option disabled value="" selected>
                  Select your school
                </option>
                {schools.map((val, index) => (
                  <option key={index}>{val}</option>
                ))}
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px]"
                htmlFor="program"
              >
                Program
              </label>
              <select
                className=" inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] border-0 px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="program"
                required
              >
                <option disabled value="" selected>
                  Select your program
                </option>
                {programs.map((val, index) => (
                  <option key={index}>{val}</option>
                ))}
              </select>
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <button
                type="submit"
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Save changes
              </button>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
