import { useState } from "react";

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "today"
              ? "border-b-2 border-green-500 text-green-500 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("today")}
        >
          Hari Ini - Produk Apa Saja
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "upcoming"
              ? "border-b-2 border-green-500 text-green-500 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Selanjutnya
        </button>
      </div>

      <div className="p-4">
        {activeTab === "today" ? <div></div> : <div></div>}
      </div>
    </div>
  );
};

export default TabSwitch;
