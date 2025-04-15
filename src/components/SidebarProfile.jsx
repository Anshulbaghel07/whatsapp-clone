import React from "react";
import { auth } from "../firebase/config";

const SidebarProfile = ({ interest }) => {
  const user = auth.currentUser;

  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
      <div className="bg-white rounded-xl p-5 text-center shadow-sm">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-semibold shadow">
          {user?.displayName?.charAt(0)}
        </div>
        <h2 className="mt-4 font-bold text-lg text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{interest}</p>
      </div>
    </aside>
  );
};

export default SidebarProfile;
