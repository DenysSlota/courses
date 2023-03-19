import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-gray-800 fixed top-0 left-0 right-0 z-10'>
        <div className='h-[80px] items-center max-w-[1280px] m-auto px-10'>
            <p className='text-white text-3xl font-medium text-center cursor-default my-auto p-2'>
            <NavLink to="/">Best courses</NavLink></p>
            {/* <Theme /> */}
        </div>
    </header>
  )
}

export default Header