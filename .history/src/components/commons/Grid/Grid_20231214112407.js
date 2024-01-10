const Grid = () => {
  return (
    <div className="container w-x-screen mx-auto p-2 bg-[#EEF0F4]">
      <h2 className="text-lg text-bold">Colours</h2>
      <div className="grid grid-cols-4 gap-4 flex justify-start">
        <div className="bg-gray-100"></div>
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
