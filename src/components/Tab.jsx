import React from "react";
import clsx from "clsx";
import _ from 'lodash'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tab = ({ tabs = [], currentTab, setCurrentTab, className }) => {
  return (
    <>
      <div className={className}>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer"
            defaultValue={tabs.find(tab => tab.id === currentTab)?.name}
          >
            {tabs.map((tab, index) => (
              <option key={index}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab, index) => (
                <a
                  key={index}
                  href={tab.href}
                  onClick={() => setCurrentTab(tab.id)}
                  className={clsx(
                    tab.id === currentTab
                      ? " border-radical-red-600 text-radical-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer text-center ",
                  )}
                >
                  {tab.name}
                  {tab.count && (
                    <span
                      className={clsx(
                        "inline-flex rounded-full mx-2  px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100",
                        tab.id === currentTab &&
                          "text-radical-red-800 bg-radical-red-100",
                      )}
                    >
                      {_.get(tab, "count", "0")}
                    </span>
                  )}
                </a>   
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export { Tab };
