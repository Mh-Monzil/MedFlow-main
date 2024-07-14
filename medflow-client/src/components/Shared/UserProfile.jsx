import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, signOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        <div>
          {/* Avatar */}
          <img
            className="rounded-full w-10 h-10 object-cover cursor-pointer"
            referrerPolicy="no-referrer"
            src={
              user && user?.photoURL
                ? user.photoURL
                : "https://i.ibb.co/Xxffc8X/Screenshot-2024-07-14-004634.png"
            }
            alt="profile"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-16 text-sm z-30">
          <div>
            {user ? (
              <>
                <div
                  onClick={signOutUser}
                  className=" p-5 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
                <div >
                  <Link
                    to="/dashboard/my-profile"
                    className="flex p-5 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                  >
                    Dashboard
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <Link
                  to="/signin"
                  className="flex p-5 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
