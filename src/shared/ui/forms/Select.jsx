import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import _ from "lodash";
import PropTypes from "prop-types";
import { Required } from "../../../pages/CreateProduct.jsx";



const Select = ({
  label,
  data = [],
  select,
  setSelect,
  labelKey = "label",
  valueKey = "value",
  placeholder,
  required = false,
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {required && <Required />}
          {label}
        </label>
      )}
      <Listbox value={select} onChange={setSelect}>
        <div className="relative mt-1 border border-slate-400 rounded-lg">
          <Listbox.Button className="relative w-full h-10 py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">
              {_.get(_.filter(data, [valueKey, select])[0], labelKey) ||
                placeholder}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {_.map(data, (item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                  }`
                }
                value={_.get(item, valueKey)}
              >
                <>
                  <span
                    className={`block truncate ${
                      _.isEqual(select, _.get(item, valueKey))
                        ? "font-medium"
                        : "font-normal"
                    }`}
                  >
                    {_.get(item, labelKey)}
                  </span>
                  {_.isEqual(select, _.get(item, valueKey)) ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      {error && (
        <span className="text-xs text-radical-red-600 font-light">{error}</span>
      )}
    </div>
  );
};

export { Select };

Select.propTypes = {
  label: PropTypes.string,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
};
