import PropTypes from "prop-types";

const sizes = {
  xs: "xs",
  sm: "sm",
  base: "base",
  l: "l",
  xl: "xl",
};

const colors = {
  red: "red",
  pink: "pink",
  white: "white",
};

const Button = ({ size, color, children, fullWidth, ...rest }) => {
  const getStyles = size => {
    switch (size) {
      case sizes.xs:
        return "text-xs px-3 py-2";
      case sizes.sm:
        return "text-sm px-3 py-2";
      case sizes.base:
        return "text-base px-4 py-2";
      case sizes.l:
        return "text-lg px-4 py-2";
      case sizes.xl:
        return "text-xl px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  };

  const getColor = color => {
    switch (color) {
      case colors.red:
        return "text-white bg-radical-red-500 hover:bg-radical-red-600 focus:ring-radical-red-500";
      case colors.pink:
        return "text-radical-red-600 bg-radical-red-100 hover:bg-radical-red-200 focus:ring-radical-red-500";
      case colors.white:
        return "text-gray-700 bg-white hover:bg-gray-50 focus:ring-radical-red-500 !border-gray-300";
      default:
        return "text-white bg-radical-red-500 hover:bg-radical-red-600 focus:ring-radical-red-500";
    }
  };

  return (
    <>
      <button
        // type={rest.type}
        className={`inline-flex items-center justify-center gap-2 
        border border-transparent font-medium rounded 
        focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-50
        ${fullWidth ? "w-full" : ""}
        ${getColor(color)} ${getStyles(size)}`}
        style={{ minWidth: "120px" }}
        // onClick={rest.onClick}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export { Button };

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  fullWidth: PropTypes.bool,
};
Button.defaultProps = {
  size: sizes.base,
  color: colors.red,
  fullWidth: false,
};
