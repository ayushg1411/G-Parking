import React from "react";
import { Link } from "react-router-dom";
function ProfileScreen() {
  return (
    <>
      <div className="flex-row ">
        <div className="flex-row">
          <div  className="m-1 bg-gray-700 max-w-36 text-sm px-1  text-center rounded-sm">
            <Link
              to="/profile"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              Information
            </Link>
          </div>
          <div className="m-1 bg-gray-700 text-sm px-1 max-w-36  text-center rounded-sm">
            <Link
              to="/my-bookings"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              My bookings
            </Link>
          </div>
          <div className="m-1 bg-gray-700 text-sm px-1 max-w-36  text-center rounded-sm">
            {" "}
            <Link
              to="/my-vehicle"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              My Vehicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
