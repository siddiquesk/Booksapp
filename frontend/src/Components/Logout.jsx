import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Error" + err);
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <>
      <div>
        <button
          className="px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md hover:bg-red-600 ease-in-out duration-300 transition-all"
          onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
