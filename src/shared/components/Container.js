const Container = ({ children }) => {
  return (
    <div className="bg-white min-h-[80vh] px-4 py-1 sm:px-6 sm:py-7 md:grid md:place-items-center lg:px-8">
      <div className=" mx-auto w-6/12 h-full ">{children}</div>
    </div>
  );
};

export default Container;
