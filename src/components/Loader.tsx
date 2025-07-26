
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin flex items-center justify-center text-3xl font-bold text-yellow-500">
        NS
      </div>
    </div>
  );
};

export default Loader;
