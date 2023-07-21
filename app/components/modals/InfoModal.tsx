"use client";

import React, { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";

import { programs, schools } from "@/app/utils/constants";
import { toast } from "react-hot-toast";

export default function InfoModal() {
  const [username, setUsername] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [program, setProgram] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const { data, error, isLoading } = useSWR("/api/info", fetcher);

  useEffect(() => {
    if (data && !data.complete) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data]);

  if (error) toast.error("Something went wrong", { className: "text-sm" });
  if (isLoading) return null;

  async function updateInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUpdating(true);
    const body = {
      username,
      school,
      program,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch("/api/addUserInfo", requestOptions);

    if (!response.ok) {
      toast.error("Something went wrong", {
        className: "text-sm dark:bg-neutral-800 dark:text-white",
        duration: 3000,
      });
      return;
    }

    setOpen(false);
    setIsUpdating(false);
    toast.success("Information updated", {
      className: "text-sm dark:bg-neutral-800 dark:text-white",
      duration: 3000,
    });
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:border-neutral-700 dark:bg-black">
          <AlertDialog.Title className="m-0 text-[17px] font-medium">
            Update Profile
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal">
            We need some more information before you can start using anon.
          </AlertDialog.Description>
          <form onSubmit={(e) => updateInfo(e)}>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="inline-flex h-[38px] w-full flex-1 items-center justify-center rounded-[4px] bg-transparent px-[10px] text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                required
                minLength={3}
                onChange={(e) => setUsername(e.target.value)}
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
                className="inline-flex h-[38px] w-full flex-1 items-center justify-center rounded-[4px] border-0 bg-transparent px-[10px] text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] "
                id="program"
                onChange={(e) => setSchool(e.target.value)}
                defaultValue={"Select your school"}
                required
              >
                <option disabled value="Select your school">
                  Select your school
                </option>
                {schools.map((val, index) => (
                  <option key={val}>{val}</option>
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
                className="inline-flex h-[38px] w-full flex-1 items-center justify-center rounded-[4px] border-0 bg-transparent px-[10px] text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="program"
                onChange={(e) => setProgram(e.target.value)}
                defaultValue={"Select your program"}
                required
              >
                <option disabled value="Select your program">
                  Select your program
                </option>
                {programs.map((val) => (
                  <option key={val}>{val}</option>
                ))}
              </select>
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              {!isUpdating ? (
                <button
                  type="submit"
                  className="inline-flex h-[35px] items-center justify-center rounded-[4px] border border-black px-[15px] font-medium transition duration-100 hover:scale-105 focus:shadow-[0_0_0_2px] focus:outline-none dark:border-neutral-700"
                >
                  Save changes
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="inline-flex items-center justify-center rounded-[4px] border border-neutral-400 px-5 py-2 font-medium text-neutral-400 dark:border-neutral-700 dark:text-neutral-500"
                >
                  Save changes
                </button>
              )}
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
