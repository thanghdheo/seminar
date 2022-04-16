const Textarea = ({ label, rows = 4, ...rest }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="mt-1">
        <textarea
          rows={rows}
          {...rest}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Textarea;
