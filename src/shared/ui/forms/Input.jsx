import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Required } from "../../../pages/CreateProduct.jsx";

const Input = forwardRef(({ label, required, error, ...rest }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {required && <Required />}
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          ref={ref}
          {...rest}
          className="shadow-sm focus:ring-radical-red-500 focus:border-radical-red-600 outline-none text-sm  block w-full sm:text-sm border border-slate-300 rounded-md h-10 px-5 text-grey-30 font-extralight disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-500"
        />
      </div>
      {error && (
        <span className="text-xs text-radical-red-600 font-light">{error}</span>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };

Input.propTypes = {
  label: PropTypes.string,
};
