/* This example requires Tailwind CSS v2.0+ */
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pagesNumber = [];
  const [currentNumber, setCurrentNumber] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pagesNumber.push(i);
  }
  return (
    <nav className="border-t border-gray-200 px-4 py-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <a
          onClick={() => {
            paginate(currentNumber > 1 ? currentNumber - 1  : 1);
            setCurrentNumber(currentNumber > 1 ? currentNumber - 1  : 1);
          }}
          href="#"
          className={clsx(
            " border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium",
            
          )}
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pagesNumber.map((number) => (
          <a
            onClick={() => {
              paginate(number);
              setCurrentNumber(number);
            }}
            href="#"
            clx
            className={clsx(
              " border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium",
              currentNumber === number
                ? "border-red-500 text-red-500 "
                : ""
            )}
          >
            {number}
          </a>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
      <a
          onClick={() => {
            paginate(currentNumber < pagesNumber.length ? currentNumber + 1  : pagesNumber.length);
            setCurrentNumber(currentNumber < pagesNumber.length ? currentNumber + 1  : pagesNumber.length);
          }}
          href="#"
          className={clsx(
            " border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium",
            
          )}
        >
          Next
          <ArrowNarrowRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
