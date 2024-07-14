

import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import profileImage from '../../assets/images/dashboard-bg.webp'
import { FadeLoader } from "react-spinners";




const MyProfile = () => {
  const { user, loading } = useAuth() || {}
  const [role, isLoading] = useRole();
    
  console.log(role)
  if (loading) return <FadeLoader  className="h-screen flex items-center justify-center" height={30} width={3} color="#F2A227" />
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white  shadow-lg rounded-2xl w-3/5'>
        <div className="bg-black">
        <img
          alt='profile'
          src={profileImage}
          className='w-full mb-4 opacity-60 bg-black rounded-t-lg h-36'
        />
        </div>
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
            {role}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile