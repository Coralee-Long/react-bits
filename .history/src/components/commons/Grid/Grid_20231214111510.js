const Grid = () => {
  return (
    <div className="container w-x-screen mx-auto p-2">
      <h2 className="text-lg text-bold">Colours</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-100"><input className="font-montserrat text-lg text-[#6C7587] p-2 relative border-3 border-transparent outline-none text-center bg-[#EBECF0] transition-all duration-250 ease-in-out focus:border-transparent focus:border-[rgba(255,255,255,0.5)] placeholder-[#6C7587] placeholder-opacity-
</div>
        <div className="bg-gray-100">02</div>
        <div className="bg-gray-100">03</div>
        <div className="bg-gray-100">04</div>
        <div className="bg-gray-100">05</div>
        <div className="bg-gray-100">06</div>
        <div className="bg-gray-100">07</div>
        <div className="bg-gray-100">08</div>
      </div>
    </div>
  );
};

export default Grid;
